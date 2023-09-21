import { useTranslation } from 'react-i18next';
import {
  StyledCircleDiv,
  StyledContainer,
  StyledDiv,
  StyledH2,
  StyledH3,
  StyledP,
  StyledSpan,
} from 'components/SectionServices/SectionServices.styled';
import sprite from '../../images/sprite.svg';
import service0101x from '../../images/mobile/car-tire/car-tire-service01@1x-min.jpg';
import service0102x from '../../images/mobile/car-tire/car-tire-service01@2x-min.jpg';
import service0201x from '../../images/mobile/car-tire/car-tire-service02@1x-min.jpg';
import service0202x from '../../images/mobile/car-tire/car-tire-service02@2x-min.jpg';
import service0301x from '../../images/mobile/car-tire/car-tire-service03@1x-min.jpg';
import service0302x from '../../images/mobile/car-tire/car-tire-service03@2x-min.jpg';
import {
  StyledCarServiceButton,
  StyledCarServiceDiv,
  StyledCarServiceH4,
  StyledCarServiceUl,
} from '../CarServiceAbout/CarServiceAbout.styled';

const CarTireServiceAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
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
            <StyledCarServiceDiv>
              <img
                srcSet={`${service0101x} 1x, ${service0102x} 2x`}
                src={service0101x}
                alt="car-wash-img"
                loading="lazy"
                width={360}
                height={250}
              />
              <StyledCarServiceH4>
                {t('footer.tireServiceList.0')}
              </StyledCarServiceH4>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv>
              <img
                srcSet={`${service0201x} 1x, ${service0202x} 2x`}
                src={service0201x}
                alt="car-wash-img"
                loading="lazy"
                width={360}
                height={250}
              />
              <StyledCarServiceH4 style={{ width: 'auto' }}>
                {t('footer.tireServiceList.1')}
              </StyledCarServiceH4>
              <StyledCarServiceButton>
                <svg width="30" height="30">
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv>
              <img
                srcSet={`${service0301x} 1x, ${service0302x} 2x`}
                src={service0301x}
                alt="car-wash-img"
                loading="lazy"
                width={360}
                height={250}
              />
              <StyledCarServiceH4>
                {t('footer.tireServiceList.2')}
              </StyledCarServiceH4>
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
