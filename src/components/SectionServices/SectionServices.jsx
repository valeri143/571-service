import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  StyledBgSvg,
  StyledCircleDiv,
  StyledDiv,
  StyledContainer,
  StyledH2,
  StyledH3,
  StyledSpan,
  StyledP,
  StyledSvg,
  StyledServicesDiv,
  StyledH4,
  StyledNavLink,
  StyledUl,
  StyledServicesUl,
  StyledServicesDiv02,
  StyledNavLink02,
  StyledH402,
} from './SectionServices.styled';
import sprite from '../../images/sprite.svg';
import carWash1x from '../../images/mobile/services/car-wash@1x-min.jpg';
import carWash2x from '../../images/mobile/services/car-wash@2x-min.jpg';
import carService1x from '../../images/mobile/services/car-service@1x-min.png';
import carService2x from '../../images/mobile/services/car-service@2x-min.png';
import carTire from '../../images/mobile/services/car-tire-min.jpg';
export const SectionServices = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section id="services">
      <StyledContainer>
        <StyledBgSvg width="215" height="158">
          <use href={`${sprite}#icon-bg`}></use>
        </StyledBgSvg>
        <StyledDiv>
          <StyledCircleDiv></StyledCircleDiv>
          <StyledH2>{t('header.navLinksList.0')}</StyledH2>
        </StyledDiv>
        <StyledH3>
          <StyledSpan>{t('services.h3.0')}</StyledSpan>
          {t('services.h3.1')}
        </StyledH3>
        <StyledP>{t('services.p')}</StyledP>
        <StyledServicesUl>
          <li>
            <StyledServicesDiv>
              <img
                srcSet={`${carWash1x} 1x, ${carWash2x} 2x`}
                src={carWash1x}
                alt="car-wash-img"
                loading="lazy"
                width={360}
                height={222}
              />
              <StyledSvg
                width="30"
                height="30"
                onClick={() => navigate('car-wash-service')}
              >
                <use href={`${sprite}#icon-arrow-yellow`}></use>
              </StyledSvg>
              <StyledH4>{t('services.servicesUlText.0')}</StyledH4>
              <StyledUl>
                <li>
                  <StyledNavLink>{t('services.carWashItem.0')}</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink>{t('services.carWashItem.1')}</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink>{t('services.carWashItem.2')}</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink>{t('services.carWashItem.3')}</StyledNavLink>
                </li>
              </StyledUl>
            </StyledServicesDiv>
          </li>
          <li>
            <StyledServicesDiv02>
              <img
                srcSet={`${carService1x} 1x, ${carService2x} 2x`}
                src={carService1x}
                alt="car-service-img"
                loading="lazy"
                width={360}
                height={212}
              />
              <StyledSvg
                width="30"
                height="30"
                onClick={() => navigate('car-service')}
              >
                <use href={`${sprite}#icon-arrow-black`}></use>
              </StyledSvg>
              <StyledH402>{t('services.servicesUlText.1')}</StyledH402>
              <StyledUl>
                <li>
                  <StyledNavLink02>
                    {t('services.carServiceItem.0')}
                  </StyledNavLink02>
                </li>
                <li>
                  <StyledNavLink02>
                    {t('services.carServiceItem.1')}
                  </StyledNavLink02>
                </li>
                <li>
                  <StyledNavLink02>
                    {t('services.carServiceItem.2')}
                  </StyledNavLink02>
                </li>
                <li>
                  <StyledNavLink02>
                    {t('services.carServiceItem.3')}
                  </StyledNavLink02>
                </li>
              </StyledUl>
            </StyledServicesDiv02>
          </li>
          <li>
            <StyledServicesDiv>
              <img
                src={carTire}
                alt="tire-service-img"
                loading="lazy"
                width={360}
                height={222}
              />
              <StyledSvg
                width="30"
                height="30"
                onClick={() => navigate('car-tire-service')}
              >
                <use href={`${sprite}#icon-arrow-yellow`}></use>
              </StyledSvg>
              <StyledH4>{t('services.servicesUlText.2')}</StyledH4>
              <StyledUl>
                <li>
                  <StyledNavLink>
                    {t('services.tireServiceItem.0')}
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink>
                    {t('services.tireServiceItem.1')}
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink>
                    {t('services.tireServiceItem.2')}
                  </StyledNavLink>
                </li>
                <li>
                  <StyledNavLink>
                    {t('services.tireServiceItem.3')}
                  </StyledNavLink>
                </li>
              </StyledUl>
            </StyledServicesDiv>
          </li>
        </StyledServicesUl>
      </StyledContainer>
    </section>
  );
};
