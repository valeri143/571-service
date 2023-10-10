import { useTranslation } from 'react-i18next';
import { StyledContainer } from 'components/SectionServices/SectionServices.styled';
import {
  StyledCircleDiv,
  StyledDesktopBgImg,
  StyledDiv,
  StyledH2,
  StyledH3,
  StyledP,
  StyledSpan,
} from 'components/SectionAbout/SectionAbout.styled';
import bgD from 'images/desktop/bg-circle-desktop.png';
import sprite from 'images/sprite.svg';
import service0101x from 'images/car-sevices/car-service-about01@1x-min.jpg';
import service0102x from 'images/car-sevices/car-service-about01@2x-min.jpg';
import service0101xD from 'images/desktop/links/engine@1x-min.jpg';
import service0102xD from 'images/desktop/links/engine@2x-min.jpg';
import services02 from 'images/car-sevices/wheel-alignment-min.jpg';
import services03 from 'images/car-sevices/chassis-min.png';
import services04 from 'images/car-sevices/electric-min.jpg';
import services05 from 'images/car-sevices/body-min.png';
import services06 from 'images/car-sevices/dent-min.jpg';
import {
  StyledAnimationImg,
  StyledCarServiceButton,
  StyledCarServiceDiv,
  StyledCarServiceH4,
  StyledCarServiceH4More,
  StyledCarServiceUl,
  StyledDesktopP,
  StyledDesktopSpan,
  StyledDesktopTextDiv,
} from './CarServiceAbout.styled';

const CarServiceAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledDesktopBgImg src={bgD} alt="background-circle" loading="lazy" />
        <StyledDiv>
          <StyledCircleDiv></StyledCircleDiv>
          <StyledH2>{t('carService.h2')}</StyledH2>
        </StyledDiv>
        <StyledH3>
          {t('carService.h3.0')}
          <StyledSpan>{t('carService.h3.1')}</StyledSpan>
        </StyledH3>
        <StyledP style={{ marginBottom: '20px' }}>
          {t('carService.pList.0')}
        </StyledP>
        <StyledP>{t('carService.pList.1')}</StyledP>
        <StyledCarServiceUl>
          <li>
            <StyledCarServiceDiv href="car-service/engine-repair">
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${service0101xD} 1x, ${service0102xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  srcSet={`${service0101x} 1x, ${service0102x} 2x`}
                  src={service0101x}
                  alt="engine-repair-img"
                  sizes="(max-width: 1512px) 100vw, 360px"
                  loading="lazy"
                  height={250}
                />
              </picture>
              <StyledCarServiceH4>
                {t('footer.carServiceList.0')}
              </StyledCarServiceH4>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv href="car-service/wheel-alignment">
              <picture>
                <source
                  media="(min-width: 1512px)"
                  src={services02}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  src={services02}
                  alt="checkpoint-repair-img"
                  sizes="(max-width: 1512px) 100vw, 360px"
                  loading="lazy"
                  height={250}
                />
              </picture>
              <StyledCarServiceH4>
                {t('hero.animationText.0')}
              </StyledCarServiceH4>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv href="car-service/chassis-repair">
              <picture>
                <source
                  media="(min-width: 1512px)"
                  src={services03}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  src={services03}
                  alt="repair-maintenance-img"
                  sizes="(max-width: 1512px) 100vw, 360px"
                  loading="lazy"
                  height={250}
                />
              </picture>
              <StyledCarServiceH4More>
                {t('carService.h4List.0')}
              </StyledCarServiceH4More>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv href="car-service/electric-repair">
              <picture>
                <source
                  media="(min-width: 1512px)"
                  src={services04}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  src={services04}
                  alt="repair-maintenance-img"
                  sizes="(max-width: 1512px) 100vw, 360px"
                  loading="lazy"
                  height={250}
                />
              </picture>
              <StyledCarServiceH4More>
                {t('header.servicesMenu.2')}
              </StyledCarServiceH4More>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv href="car-service/car-body-repair">
              <picture>
                <source
                  media="(min-width: 1512px)"
                  src={services05}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  src={services05}
                  alt="repair-maintenance-img"
                  sizes="(max-width: 1512px) 100vw, 360px"
                  loading="lazy"
                  height={250}
                />
              </picture>
              <StyledCarServiceH4>
                {t('footer.carServiceList.4')}
              </StyledCarServiceH4>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv href="car-service/extra-services">
              <picture>
                <source
                  media="(min-width: 1512px)"
                  src={services06}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  src={services06}
                  alt="repair-maintenance-img"
                  sizes="(max-width: 1512px) 100vw, 360px"
                  loading="lazy"
                  height={250}
                />
              </picture>
              <StyledCarServiceH4More>
                {t('header.servicesMenu.1')}
              </StyledCarServiceH4More>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
        </StyledCarServiceUl>
        <StyledDesktopP>{t('desktopText.0')}</StyledDesktopP>
        <StyledDesktopTextDiv>
          <StyledDesktopSpan>{t('desktopText.1')}</StyledDesktopSpan>
          {t('desktopText.2')}
        </StyledDesktopTextDiv>
      </StyledContainer>
    </section>
  );
};
export default CarServiceAbout;
