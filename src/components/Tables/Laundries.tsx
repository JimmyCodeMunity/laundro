import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { NavLink, useLocation } from 'react-router-dom';



const ViewLaundries = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    handleLaundries();
  }, []);

  const handleLaundries = async () => {
    setLoading(true);
    
    
    try {
      const response = await axios.get(
        'https://laundryappbackend.vercel.app/api/v2/admin/alllaundries',
      );
      setProductData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Error fetching laundries',
      });
    }
  };


  //handle go to next screen
  
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">

        
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Laundries
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Laundry Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Phone</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Phone</p>
        </div>
        
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price/Kg</p>
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
              {laundry.phone}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {laundry.price}
            </p>
          </div>
          
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-3">KES.{laundry.price}</p>
          </div>
          <NavLink
              to={{
                pathname: '/Assign', // Update with the target route
                state: { laundryname: laundry.laundryname }, // Pass laundryname as state
              }}
            >
              <button className="text-sm text-meta-3">Edit</button>
            </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ViewLaundries;
