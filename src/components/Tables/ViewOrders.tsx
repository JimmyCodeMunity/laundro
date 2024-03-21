import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { NavLink,useNavigate } from 'react-router-dom';



const ViewOrders = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAssignClick = (laundry) => {
    // Navigate to the Assign screen and pass laundryname as a query parameter
    navigate(`/Assign?selector=${encodeURIComponent(laundry._id)}`);
  };
  
  // const { laundryname } = location.state;

  useEffect(() => {
    
    handleLaundries();
  }, []);

  const handleLaundries = async () => {
    setLoading(true);
    
    
    try {
      const response = await axios.get(
        'https://laundryappbackend.vercel.app/api/v2/admin/allorders',
      );
      setProductData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Error fetching Orders',
      });
    }
  };
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">

        
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Orders for
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Laundry Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">CustomerName</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Status</p>
        </div>
        
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>

      {productData.map((laundry, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                {laundry.laundryname}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {laundry.customername}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {laundry.orderstatus}
            </p>
          </div>
          la
          <div className="col-span-1 flex items-center">
          
              <button onClick={() => handleAssignClick(laundry)} className="text-sm text-meta-3">Assign/View Order</button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewOrders;
