import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/Riders';
import DefaultLayout from '../layout/DefaultLayout';
import ViewRiders from '../components/Tables/Riders';

const Riders = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Riders" />

      <div className="flex flex-col gap-10">
        
        <ViewRiders/>
        
      </div>
    </DefaultLayout>
  );
};

export default Riders;
