import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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
import bgD from '../../images/desktop/bg-circle-desktop.png';
import sprite from '../../images/sprite.svg';
import service0101x from '../../images/car-sevices/car-service-about01@1x-min.jpg';
import service0102x from '../../images/car-sevices/car-service-about01@2x-min.jpg';
import service0101xD from '../../images/desktop/links/engine@1x-min.jpg';
import service0102xD from '../../images/desktop/links/engine@2x-min.jpg';
import service0201x from '../../images/car-sevices/car-service-about02@1x-min.jpg';
import service0202x from '../../images/car-sevices/car-service-about02@2x-min.jpg';
import service0201xD from '../../images/desktop/links/gearbox@1x-min.jpg';
import service0202xD from '../../images/desktop/links/gearbox@2x-min.jpg';
import service0301x from '../../images/car-sevices/car-service-about03@1x-min.jpg';
import service0302x from '../../images/car-sevices/car-service-about03@2x-min.jpg';
import service0301xD from '../../images/desktop/links/chassis@1x-min.jpg';
import service0302xD from '../../images/desktop/links/chassis@2x-min.jpg';
import service0401x from '../../images/car-sevices/car-service-about04@1x-min.jpg';
import service0402x from '../../images/car-sevices/car-service-about04@2x-min.jpg';
import service0401xD from '../../images/desktop/links/electric@1x-min.jpg';
import service0402xD from '../../images/desktop/links/electric@2x-min.jpg';
import service0501x from '../../images/car-sevices/car-service-about05@1x-min.jpg';
import service0502x from '../../images/car-sevices/car-service-about05@2x-min.jpg';
import service0501xD from '../../images/desktop/links/body@1x-min.jpg';
import service0502xD from '../../images/desktop/links/body@2x-min.jpg';
import service0601x from '../../images/car-sevices/car-service-about06@1x-min.jpg';
import service0602x from '../../images/car-sevices/car-service-about06@2x-min.jpg';
import service0601xD from '../../images/desktop/links/extra@1x-min.jpg';
import service0602xD from '../../images/desktop/links/extra@2x-min.jpg';
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
  const navigate = useNavigate();
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
            <StyledCarServiceDiv onClick={() => navigate('engine-repair')}>
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
            <StyledCarServiceDiv onClick={() => navigate('gearbox-repair')}>
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${service0201xD} 1x, ${service0202xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  srcSet={`${service0201x} 1x, ${service0202x} 2x`}
                  src={service0201x}
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
            <StyledCarServiceDiv onClick={() => navigate('chassis-repair')}>
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${service0301xD} 1x, ${service0302xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  srcSet={`${service0301x} 1x, ${service0302x} 2x`}
                  src={service0301x}
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
            <StyledCarServiceDiv onClick={() => navigate('electric-repair')}>
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${service0401xD} 1x, ${service0402xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  srcSet={`${service0401x} 1x, ${service0402x} 2x`}
                  src={service0401x}
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
            <StyledCarServiceDiv onClick={() => navigate('car-body-repair')}>
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${service0501xD} 1x, ${service0502xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  srcSet={`${service0501x} 1x, ${service0502x} 2x`}
                  src={service0501x}
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
            <StyledCarServiceDiv onClick={() => navigate('extra-services')}>
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${service0601xD} 1x, ${service0602xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  srcSet={`${service0601x} 1x, ${service0602x} 2x`}
                  src={service0601x}
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
