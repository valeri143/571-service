import { lazy } from 'react';
import { CarServiceEngineRepairHero } from 'components/CarServiceEngineRepair/CarServiceEngineRepairHero';
import { CarServiceEngineRepairAbout } from 'components/CarServiceEngineRepair/CarServiceEngineRepairAbout';
import { CarServiceEngineRepairForm } from 'components/CarServiceEngineRepair/CarServiceEngineRepairForm';

const CarServiceEngineRepairPrice = lazy(() =>
  import('components/CarServiceEngineRepair/CarServiceEngineRepairPrice')
);
const SectionFeedbacks = lazy(() =>
  import('components/SectionFeedbacks/SectionFeedbacks')
);
const SectionCertifications = lazy(() =>
  import('components/SectionCertifications/SectionCertifications')
);
const SectionForm = lazy(() => import('components/SectionForm/SectionForm'));
const SectionBlog = lazy(() => import('components/SectionBlog/SectionBlog'));

const CarServiceEngineRepairPage = () => {
  return (
    <>
      <CarServiceEngineRepairHero />
      <CarServiceEngineRepairAbout />
      <CarServiceEngineRepairForm />
      <CarServiceEngineRepairPrice />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
    </>
  );
};

export default CarServiceEngineRepairPage;
