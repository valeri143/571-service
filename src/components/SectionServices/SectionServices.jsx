import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animation } from '../Hero/Hero';
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
import carWash1xD from '../../images/desktop/services/car-wash-detailing-station@1x-min.jpg';
import carWash2xD from '../../images/desktop/services/car-wash-detailing-station@2x-min.jpg';
import carService1xD from '../../images/desktop/services/car-service-detailing-station@1x-min.png';
import carService2xD from '../../images/desktop/services/car-service-detailing-station@2x-min.png';
import carTire1xD from '../../images/desktop/services/car-tire-detailing-station@1x-min.jpg';
import carTire2xD from '../../images/desktop/services/car-tire-detailing-station@2x-min.jpg';
export const SectionServices = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <motion.section
      id="services"
      initial={window.innerWidth >= 1512 ? 'hidden' : 'visible'}
      whileInView="visible"
      viewport={{ amount: 0.7, once: true }}
    >
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
        <StyledServicesUl variants={animation} as={motion.ul}>
          <li>
            <StyledServicesDiv onClick={() => navigate('car-wash-service')}>
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${carWash1xD} 1x, ${carWash2xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <img
                  srcSet={`${carWash1x} 1x, ${carWash2x} 2x`}
                  src={carWash1x}
                  sizes="(max-width: 1512px) 100vw, 360px"
                  alt="car-wash-img"
                  loading="lazy"
                  height={222}
                />
              </picture>
              <StyledSvg width="30" height="30">
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
            <StyledServicesDiv02 onClick={() => navigate('car-service')}>
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${carService1xD} 1x, ${carService2xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <img
                  srcSet={`${carService1x} 1x, ${carService2x} 2x`}
                  src={carService1x}
                  sizes="(max-width: 1512px) 100vw, 360px"
                  alt="car-service-img"
                  loading="lazy"
                  height={212}
                />
              </picture>
              <StyledSvg width="30" height="30">
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
            <StyledServicesDiv onClick={() => navigate('car-tire-service')}>
              <picture>
                <source
                  media="(min-width: 1512px)"
                  srcSet={`${carTire1xD} 1x, ${carTire2xD} 2x`}
                  sizes="(min-width: 1512px) 100vw, 387px"
                />
                <img
                  src={carTire}
                  sizes="(max-width: 1512px) 100vw, 360px"
                  alt="tire-service-img"
                  loading="lazy"
                  height={222}
                />
              </picture>
              <StyledSvg width="30" height="30">
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
    </motion.section>
  );
};
