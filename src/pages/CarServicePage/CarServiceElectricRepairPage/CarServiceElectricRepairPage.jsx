import { lazy } from 'react';
import { CarServiceRepairHero } from 'components/CarServiceRepair/CarServiceRepairHero';
import { CarServiceElectricRepairAbout } from 'components/CarServiceRepair/CarServiceElectricRepairAbout';

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

const CarServiceElectricRepairPage = () => {
  return (
    <>
      <CarServiceRepairHero
        h1={'footer.carServiceList.3'}
        p={'electricRepair.p'}
      />
      <CarServiceElectricRepairAbout />
      <CarServiceRepairPrice
        h2={'electricRepair.h2'}
        list={'electricRepair.serviceList'}
        price={'electricRepair.priceList'}
      />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};
export default CarServiceElectricRepairPage;
