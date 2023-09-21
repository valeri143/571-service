import { lazy } from 'react';
import { CarServiceGearboxRepairHero } from 'components/CarServiceGearboxRepair/CarServiceGearboxRepairHero';
import { CarServiceGearboxRepairAbout } from 'components/CarServiceGearboxRepair/CarServiceGearboxRepairAbout';
import { CarServiceEngineRepairForm } from 'components/CarServiceEngineRepair/CarServiceEngineRepairForm';

const CarServiceGearboxRepairPrice = lazy(() =>
  import('components/CarServiceGearboxRepair/CarServiceGearboxRepairPrice')
);
const SectionFeedbacks = lazy(() =>
  import('components/SectionFeedbacks/SectionFeedbacks')
);
const SectionCertifications = lazy(() =>
  import('components/SectionCertifications/SectionCertifications')
);
const SectionForm = lazy(() => import('components/SectionForm/SectionForm'));
const SectionBlog = lazy(() => import('components/SectionBlog/SectionBlog'));
const CarServiceGearboxRepairPage = () => {
  return (
    <>
      <CarServiceGearboxRepairHero />
      <CarServiceGearboxRepairAbout />
      <CarServiceEngineRepairForm />
      <CarServiceGearboxRepairPrice />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
    </>
  );
};
export default CarServiceGearboxRepairPage;
