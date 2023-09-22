import { lazy } from 'react';
import { CarWashServiceRepairHero } from 'components/CarWashServiceRepair/CarWashServiceRepairHero';
import { CarWashServiceExtraAbout } from 'components/CarWashServiceRepair/CarWashServiceExtraAbout';
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
  margin: 0,
  justifyContent: 'normal',
  gap: '40px',
  marginTop: '40px',
};

const CarWashServiceExtraPage = () => {
  return (
    <>
      <CarWashServiceRepairHero
        h1={'carService.h4List.1'}
        buttonText={'header.buttonText'}
        style={style}
      />
      <CarWashServiceExtraAbout />
      <CarServiceRepairForm />
      <CarServiceRepairPrice
        h2={'extra.h2'}
        list={'extra.serviceList'}
        price={'extra.priceList'}
      />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarWashServiceExtraPage;
