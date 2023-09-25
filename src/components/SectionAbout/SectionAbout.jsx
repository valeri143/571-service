import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { animation } from '../Hero/Hero';
import { StyledContainer } from 'components/Hero/Hero.styled';
import {
  StyledAboutDiv,
  StyledAboutP,
  StyledBgImg,
  StyledH4,
  StyledH402,
  StyledImg,
  StyledPositionImg,
  StyledCircleDiv,
  StyledDiv,
  StyledH2,
  StyledDesktopBgImg,
  StyledSpan,
  StyledH3,
  StyledP,
} from './SectionAbout.styled';
import bg from '../../images/mobile/bg-circle.png';
import bgD from '../../images/desktop/bg-circle-desktop.png';
import { StyledServicesUl } from 'components/SectionServices/SectionServices.styled';
import about011x from '../../images/mobile/about/about-item01@1x-min.jpg';
import about012x from '../../images/mobile/about/about-item01@2x-min.jpg';
import about021x from '../../images/mobile/about/about-item02@1x-min.jpg';
import about022x from '../../images/mobile/about/about-item02@2x-min.jpg';
import about011xD from '../../images/desktop/services/about1@1x-min.jpg';
import about012xD from '../../images/desktop/services/about1@2x-min.jpg';
import about021xD from '../../images/desktop/services/about2@1x-min.jpg';
import about022xD from '../../images/desktop/services/about2@2x-min.jpg';
import logo from '../../images/mobile/about/about-logo-min.png';

const SectionAbout = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={window.innerWidth >= 1512 ? 'hidden' : 'visible'}
      whileInView="visible"
      viewport={{ amount: 0.7, once: true }}
    >
      <StyledContainer>
        <StyledBgImg src={bg} alt="background-circle" loading="lazy" />
        <StyledDesktopBgImg src={bgD} alt="background-circle" loading="lazy" />
        <StyledDiv>
          <StyledCircleDiv></StyledCircleDiv>
          <StyledH2>{t('about.h2')}</StyledH2>
        </StyledDiv>
        <StyledH3>
          <StyledSpan>{t('about.h3.0')}</StyledSpan>
          {t('about.h3.1')}
        </StyledH3>
        <StyledP>{t('about.p')}</StyledP>
        <StyledServicesUl variants={animation} as={motion.ul}>
          <li>
            <StyledAboutDiv>
              <StyledImg>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${about011xD} 1x, ${about012xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 590px"
                />
                <img
                  srcSet={`${about011x} 1x, ${about012x} 2x`}
                  src={about011x}
                  alt="about-car-service-img"
                  sizes="(max-width: 1512px) 100vw, 360px"
                  loading="lazy"
                  height={368}
                />
              </StyledImg>
              <StyledPositionImg src={logo} alt="logo" loading="lazy" />
              <StyledH4>{t('about.h4List.0')}</StyledH4>
              <StyledAboutP>{t('about.pList.0')}</StyledAboutP>
            </StyledAboutDiv>
          </li>
          <li>
            <StyledAboutDiv>
              <StyledImg>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${about021xD} 1x, ${about022xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 590px"
                />
                <img
                  srcSet={`${about021x} 1x, ${about022x} 2x`}
                  src={about021x}
                  alt="about-car-service-img"
                  sizes="(max-width: 1512px) 100vw, 360px"
                  loading="lazy"
                  height={368}
                />
              </StyledImg>
              <StyledH402>{t('about.h4List.1')}</StyledH402>
              <StyledAboutP>{t('about.pList.1')}</StyledAboutP>
            </StyledAboutDiv>
          </li>
        </StyledServicesUl>
      </StyledContainer>
    </motion.section>
  );
};

export default SectionAbout;
