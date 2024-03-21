import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/Riders';
import DefaultLayout from '../layout/DefaultLayout';
// import ViewRiders from '../components/Tables/Riders';
import ViewLaundries from '../components/Tables/Laundries';

const Laundries = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Laundries" />

      <div className="flex flex-col gap-10">
        
        <ViewLaundries/>
        
      </div>
    </DefaultLayout>
  );
};

export default Laundries;
