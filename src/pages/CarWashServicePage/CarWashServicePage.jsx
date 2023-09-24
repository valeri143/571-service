import { lazy } from 'react';
import styled from 'styled-components';
import bg1x from '../../images/desktop/backgrounds/car-wash-bg@1x-min.jpg';
import bg2x from '../../images/desktop/backgrounds/car-wash-bg@2x-min.jpg';
import { CarWashServiceHero } from 'components/CarWashServiceHero/CarWashServiceHero';

const CarWashServiceAbout = lazy(() =>
  import('components/CarWashServiceAbout/CarWashServiceAbout')
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

const StyledBackGroundImage = styled.div`
  background-image: url(${bg1x});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 909px;
  position: relative;
  top: -80px;
  left: 0;
  right: 0;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg2x});
  }
`;

const CarWashServicePage = () => {
  return (
    <>
      <CarWashServiceHero Bg={StyledBackGroundImage} />
      <CarWashServiceAbout />
      <SectionFeedbacks />
      <SectionCertifications />
      <SectionForm />
      <SectionBlog />
      <SectionContacts />
    </>
  );
};
export default CarWashServicePage;
