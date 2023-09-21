import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
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
import service0101x from '../../images/mobile/car-wash/car-wash01@1x-min.jpg';
import service0102x from '../../images/mobile/car-wash/car-wash01@2x-min.jpg';
import service0201x from '../../images/mobile/car-wash/car-wash02@1x-min.jpg';
import service0202x from '../../images/mobile/car-wash/car-wash02@2x-min.jpg';
import service0301x from '../../images/mobile/car-wash/car-wash03@1x-min.jpg';
import service0302x from '../../images/mobile/car-wash/car-wash03@2x-min.jpg';
import {
  StyledCarServiceButton,
  StyledCarServiceDiv,
  StyledCarServiceH4,
  StyledCarServiceUl,
} from '../CarServiceAbout/CarServiceAbout.styled';

const CarWashServiceAbout = () => {
  const { t } = useTranslation();
  // const navigate = useNavigate();
  return (
    <section>
      <StyledContainer>
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
                {t('footer.carWashServiceList.0')}
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
                {t('carService.h4List.1')}
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

export default CarWashServiceAbout;
