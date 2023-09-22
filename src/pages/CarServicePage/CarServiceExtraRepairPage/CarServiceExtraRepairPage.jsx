import { lazy } from 'react';
import { CarServiceRepairHero } from 'components/CarServiceRepair/CarServiceRepairHero';
import { CarServiceExtraRepairAbout } from 'components/CarServiceRepair/CarServiceExtraRepairAbout';
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

const CarServiceExtraRepairPage = () => {
  return (
    <>
      <CarServiceRepairHero h1={'carService.h4List.1'} p={'extraRepair.p'} />
      <CarServiceExtraRepairAbout />
      <CarServiceRepairForm />
      <CarServiceRepairPrice
        h2={'extraRepair.h2'}
        list={'extraRepair.serviceList'}
        price={'extraRepair.priceList'}
      />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarServiceExtraRepairPage;
