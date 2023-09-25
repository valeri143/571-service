import { lazy } from 'react';
import styled from 'styled-components';
import bg1x from 'images/desktop/backgrounds/services/extra-wsh-bg@1x-min.jpg';
import bg2x from 'images/desktop/backgrounds/services/extra-wsh-bg@2x-min.jpg';
import { CarWashServiceRepairHero } from 'components/CarWashServiceRepair/CarWashServiceRepairHero';
import { CarWashServiceExtraAbout } from 'components/CarWashServiceRepair/CarWashServiceExtraAbout';

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

const StyledBackGroundImage = styled.div`
  background-image: url(${bg1x});
  background-repeat: no-repeat;
  background-size: cover;
  height: 470px;
  position: relative;
  top: -60px;
  left: 0;
  right: 0;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg2x});
  }
  @media screen and (min-width: 1512px) {
    top: -80px;
    left: 0;
    right: 0;
  }
`;

const CarWashServiceExtraPage = () => {
  return (
    <>
      <CarWashServiceRepairHero
        h1={'carService.h4List.1'}
        buttonText={'header.buttonText'}
        style={style}
        Bg={StyledBackGroundImage}
      />
      <CarWashServiceExtraAbout />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};

export default CarWashServiceExtraPage;
