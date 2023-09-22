import { lazy } from 'react';
import { CarServiceRepairHero } from 'components/CarServiceRepair/CarServiceRepairHero';
import { CarServiceBodyRepairAbout } from 'components/CarServiceRepair/CarServiceBodyRepairAbout';

const CarServiceEngineRepairPrice = lazy(() =>
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

const CarServiceBodyRepairPage = () => {
  return (
    <>
      <CarServiceRepairHero h1={'footer.carServiceList.4'} p={'bodyRepair.p'} />
      <CarServiceBodyRepairAbout />
      <CarServiceEngineRepairPrice
        h2={'bodyRepair.h2'}
        list={'bodyRepair.serviceList'}
        price={'bodyRepair.priceList'}
      />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarServiceBodyRepairPage;
