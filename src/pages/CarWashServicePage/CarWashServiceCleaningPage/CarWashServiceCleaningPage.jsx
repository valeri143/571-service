import { lazy } from 'react';
import { CarWashServiceRepairHero } from 'components/CarWashServiceRepair/CarWashServiceRepairHero';
import { CarWashServiceCleaningAbout } from 'components/CarWashServiceRepair/CarWashServiceCleaningAbout';
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

const CarWashServiceCleaningPage = () => {
  return (
    <>
      <CarWashServiceRepairHero
        h1={'footer.carWashServiceList.1'}
        p={'cleaning.p'}
        buttonText={'header.buttonText'}
      />
      <CarWashServiceCleaningAbout />
      <CarServiceRepairForm />
      <CarServiceRepairPrice
        h2={'cleaning.h2'}
        list={'cleaning.serviceList'}
        price={'cleaning.priceList'}
      />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarWashServiceCleaningPage;
