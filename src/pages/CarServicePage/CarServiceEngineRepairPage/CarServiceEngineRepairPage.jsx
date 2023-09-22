import { lazy } from 'react';
import { CarServiceRepairHero } from 'components/CarServiceRepair/CarServiceRepairHero';
import { CarServiceEngineRepairAbout } from 'components/CarServiceRepair/CarServiceEngineRepairAbout';
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

const CarServiceEngineRepairPage = () => {
  return (
    <>
      <CarServiceRepairHero
        h1={'footer.carServiceList.0'}
        p={'engineRepair.p'}
      />
      <CarServiceEngineRepairAbout />
      <CarServiceRepairForm />
      <CarServiceRepairPrice
        h2={'engineRepair.h2'}
        list={'engineRepair.serviceList'}
        price={'engineRepair.priceList'}
      />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarServiceEngineRepairPage;
