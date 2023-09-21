import { useTranslation } from 'react-i18next';
import { StyledContainer } from 'components/Hero/Hero.styled';
import {
  StyledAboutDiv,
  StyledAboutP,
  StyledBgImg,
  StyledH4,
  StyledH402,
  StyledImg,
  StyledPositionImg,
} from './SectionAbout.styled';
import bg from '../../images/bg-circle.png';
import {
  StyledCircleDiv,
  StyledDiv,
  StyledH2,
  StyledH3,
  StyledP,
  StyledServicesUl,
  StyledSpan,
} from 'components/SectionServices/SectionServices.styled';
import about011x from '../../images/mobile/about/about-item01@1x-min.jpg';
import about012x from '../../images/mobile/about/about-item01@2x-min.jpg';
import about021x from '../../images/mobile/about/about-item02@1x-min.jpg';
import about022x from '../../images/mobile/about/about-item02@2x-min.jpg';
import logo from '../../images/mobile/about/about-logo-min.png';

const SectionAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledBgImg src={bg} alt="background-circle" loading="lazy" />
        <StyledDiv>
          <StyledCircleDiv></StyledCircleDiv>
          <StyledH2>{t('about.h2')}</StyledH2>
        </StyledDiv>
        <StyledH3>
          <StyledSpan>{t('about.h3.0')}</StyledSpan>
          {t('about.h3.1')}
        </StyledH3>
        <StyledP style={{ maxWidth: 360 }}>{t('about.p')}</StyledP>
        <StyledServicesUl>
          <li>
            <StyledAboutDiv>
              <StyledImg
                srcSet={`${about011x} 1x, ${about012x} 2x`}
                src={about011x}
                alt="about-car-service-img"
                loading="lazy"
                width={360}
              />
              <StyledPositionImg src={logo} alt="logo" loading="lazy" />
              <StyledH4>{t('about.h4List.0')}</StyledH4>
              <StyledAboutP>{t('about.pList.0')}</StyledAboutP>
            </StyledAboutDiv>
          </li>
          <li>
            <StyledAboutDiv>
              <StyledImg
                srcSet={`${about021x} 1x, ${about022x} 2x`}
                src={about021x}
                alt="about-car-service-img"
                loading="lazy"
                width={360}
                height={368}
              />
              <StyledH402>{t('about.h4List.1')}</StyledH402>
              <StyledAboutP>{t('about.pList.1')}</StyledAboutP>
            </StyledAboutDiv>
          </li>
        </StyledServicesUl>
      </StyledContainer>
    </section>
  );
};

export default SectionAbout;
