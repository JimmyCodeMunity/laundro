import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/Riders';
import DefaultLayout from '../layout/DefaultLayout';
// import ViewRiders from '../components/Tables/Riders';
import ViewLaundries from '../components/Tables/Laundries';
import ViewOrders from '../components/Tables/ViewOrders';

const Orders = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders" />

      <div className="flex flex-col gap-10">
        
        <ViewOrders/>
        
      </div>
    </DefaultLayout>
  );
};

export default Orders;
