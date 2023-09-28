import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  StyledCircleDiv,
  StyledDesktopBgImg,
  StyledDiv,
  StyledH2,
  StyledH3,
  StyledP,
  StyledSpan,
} from 'components/SectionAbout/SectionAbout.styled';
import { StyledContainer } from 'components/SectionServices/SectionServices.styled';
import sprite from '../../images/sprite.svg';
import bgD from '../../images/desktop/bg-circle-desktop.png';
import service0101x from '../../images/mobile/car-tire/car-tire-service01@1x-min.jpg';
import service0102x from '../../images/mobile/car-tire/car-tire-service01@2x-min.jpg';
import service0101xD from '../../images/desktop/links/tires@1x-min.jpg';
import service0102xD from '../../images/desktop/links/tires@1x-min.jpg';
import service0201x from '../../images/mobile/car-tire/car-tire-service02@1x-min.jpg';
import service0202x from '../../images/mobile/car-tire/car-tire-service02@2x-min.jpg';
import service0201xD from '../../images/desktop/links/tire-rpr@1x-min.jpg';
import service0202xD from '../../images/desktop/links/tire-rpr@2x-min.jpg';
import service0301x from '../../images/mobile/car-tire/car-tire-service03@1x-min.jpg';
import service0302x from '../../images/mobile/car-tire/car-tire-service03@2x-min.jpg';
import service0301xD from '../../images/desktop/links/chassis-wsh@1x-min.jpg';
import service0302xD from '../../images/desktop/links/chassis-wsh@2x-min.jpg';
import {
  StyledAnimationImg,
  StyledCarServiceButton,
  StyledCarServiceDiv,
  StyledCarServiceH4More,
  StyledCarServiceH4MoreTire,
  StyledCarServiceUl,
} from '../CarServiceAbout/CarServiceAbout.styled';

const CarTireServiceAbout = () => {
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
          {t('carTire.h3.0')}
          <StyledSpan>{t('carTire.h3.1')}</StyledSpan> <br />
        </StyledH3>
        <StyledP>{t('carTire.pList')}</StyledP>
        <StyledCarServiceUl>
          <li>
            <StyledCarServiceDiv
              onClick={() => navigate('mounting-dismantling-of-tires')}
            >
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${service0101xD} 1x, ${service0102xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  srcSet={`${service0101x} 1x, ${service0102x} 2x`}
                  src={service0101x}
                  alt="car-wash-img"
                  sizes="(max-width: 1512px) 100vw, 360px"
                  loading="lazy"
                  height={250}
                />
              </picture>
              <StyledCarServiceH4MoreTire>
                {t('footer.tireServiceList.0')}
              </StyledCarServiceH4MoreTire>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv onClick={() => navigate('tires-repair')}>
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${service0201xD} 1x, ${service0202xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  srcSet={`${service0201x} 1x, ${service0202x} 2x`}
                  src={service0201x}
                  alt="car-wash-img"
                  sizes="(max-width: 1512px) 100vw, 360px"
                  loading="lazy"
                  height={250}
                />
              </picture>
              <StyledCarServiceH4MoreTire>
                {t('footer.tireServiceList.1')}
              </StyledCarServiceH4MoreTire>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv
              onClick={() => navigate('chassis-maintenance')}
            >
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${service0301xD} 1x, ${service0302xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <StyledAnimationImg
                  srcSet={`${service0301x} 1x, ${service0302x} 2x`}
                  src={service0301x}
                  alt="car-wash-img"
                  sizes="(max-width: 1512px) 100vw, 360px"
                  loading="lazy"
                  height={250}
                />
              </picture>
              <StyledCarServiceH4More>
                {t('footer.tireServiceList.2')}
              </StyledCarServiceH4More>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
        </StyledCarServiceUl>
      </StyledContainer>
    </section>
  );
};
export default CarTireServiceAbout;
