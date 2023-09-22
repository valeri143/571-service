import { lazy } from 'react';
import { CarWashServiceRepairHero } from 'components/CarWashServiceRepair/CarWashServiceRepairHero';
import { CarWashServiceHeadlightPolishingAbout } from 'components/CarWashServiceRepair/CarWashServiceHeadlightPolishingAbout';
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

const style = {
  gap: '15px',
  maxWidth: 'inherit',
  paddingRight: 0,
  margin: 0,
  justifyContent: 'normal',
};

const CarWashServiceHeadlightPolishingPage = () => {
  return (
    <>
      <CarWashServiceRepairHero
        h1={'services.servicesUlText.0'}
        p={'headlightPolishing.p'}
        buttonText={'carWash.buttonText'}
        style={style}
      />
      <CarWashServiceHeadlightPolishingAbout />
      <CarServiceRepairForm />
      <CarServiceRepairPrice
        h2={'headlightPolishing.h2'}
        list={'headlightPolishing.serviceList'}
        price={'headlightPolishing.priceList'}
      />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarWashServiceHeadlightPolishingPage;
