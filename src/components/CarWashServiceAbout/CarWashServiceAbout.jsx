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
import service0101x from '../../images/desktop/links/headlight@1x-min.jpg';
import service0102x from '../../images/desktop/links/headlight@2x-min.jpg';
import service0201x from '../../images/mobile/car-wash/car-wash02@1x-min.jpg';
import service0202x from '../../images/mobile/car-wash/car-wash02@2x-min.jpg';
import service0201xD from '../../images/desktop/links/wash@1x-min.jpg';
import service0202xD from '../../images/desktop/links/wash@2x-min.jpg';
import service0301x from '../../images/mobile/car-wash/car-wash03@1x-min.jpg';
import service0302x from '../../images/mobile/car-wash/car-wash03@2x-min.jpg';
import service0301xD from '../../images/desktop/links/extra-wash@1x-min.jpg';
import service0302xD from '../../images/desktop/links/extra-wash@2x-min.jpg';
import {
  StyledAnimationImg,
  StyledCarServiceButton,
  StyledCarServiceDiv,
  StyledCarServiceH4,
  StyledCarServiceH4Less,
  StyledCarServiceH4More,
  StyledCarServiceUl,
} from '../CarServiceAbout/CarServiceAbout.styled';

const CarWashServiceAbout = () => {
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
          <StyledSpan>{t('carWash.h3.0')}</StyledSpan>
          {t('carWash.h3.1')} <br />
          {t('carWash.h3.2')}
        </StyledH3>
        <StyledP>{t('carWash.pList')}</StyledP>
        <StyledCarServiceUl>
          <li>
            <StyledCarServiceDiv
              onClick={() => navigate('headlight-polishing')}
            >
              <StyledAnimationImg
                srcSet={`${service0101x} 1x, ${service0102x} 2x`}
                src={service0101x}
                alt="car-wash-img"
                loading="lazy"
                width={387}
                height={250}
              />
              <StyledCarServiceH4Less>
                {t('services.servicesUlText.0')}
              </StyledCarServiceH4Less>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv onClick={() => navigate('cleaning')}>
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
              <StyledCarServiceH4>
                {t('footer.carWashServiceList.1')}
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
                {t('carService.h4List.1')}
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

export default CarWashServiceAbout;
