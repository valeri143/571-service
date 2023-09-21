import { lazy } from 'react';
import { CarServiceChassisRepairHero } from 'components/CarServiceChassisRepair/CarServiceChassisRepairHero';
import { CarServiceChassisRepairAbout } from 'components/CarServiceChassisRepair/CarServiceChassisRepairAbout';
import { CarServiceEngineRepairForm } from 'components/CarServiceEngineRepair/CarServiceEngineRepairForm';

const CarServiceChassisRepairPrice = lazy(() =>
  import('components/CarServiceChassisRepair/CarServiceChassisRepairPrice')
);
const SectionFeedbacks = lazy(() =>
  import('components/SectionFeedbacks/SectionFeedbacks')
);
const SectionCertifications = lazy(() =>
  import('components/SectionCertifications/SectionCertifications')
);
const SectionForm = lazy(() => import('components/SectionForm/SectionForm'));
const SectionBlog = lazy(() => import('components/SectionBlog/SectionBlog'));

const CarServiceChassisRepairPage = () => {
  return (
    <>
      <CarServiceChassisRepairHero />
      <CarServiceChassisRepairAbout />
      <CarServiceEngineRepairForm />
      <CarServiceChassisRepairPrice />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
    </>
  );
};

export default CarServiceChassisRepairPage;
