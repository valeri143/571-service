import { lazy } from 'react';
import { CarServiceRepairHero } from 'components/CarServiceRepair/CarServiceRepairHero';
import { CarServiceGearboxRepairAbout } from 'components/CarServiceRepair/CarServiceGearboxRepairAbout';
import { CarServiceRepairForm } from 'components/CarServiceRepair/CarServiceRepairForm';

const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);
const SectionFeedbacks = lazy(() =>
  import('components/SectionFeedbacks/SectionFeedbacks')
);
const SectionCertifications = lazy(() =>
  import('components/SectionCertifications/SectionCertifications')
);
const SectionForm = lazy(() => import('components/SectionForm/SectionForm'));
const SectionBlog = lazy(() => import('components/SectionBlog/SectionBlog'));
const SectionContacts = lazy(() =>
  import('components//SectionContacts/SectionContacts')
);
const CarServiceGearboxRepairPage = () => {
  return (
    <>
      <CarServiceRepairHero
        h1={'footer.carServiceList.1'}
        p={'gearboxRepair.p'}
      />
      <CarServiceGearboxRepairAbout />
      <CarServiceRepairForm />
      <CarServiceRepairPrice
        h2={'gearboxRepair.h2'}
        list={'gearboxRepair.serviceList'}
        price={'gearboxRepair.priceList'}
      />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};
export default CarServiceGearboxRepairPage;
