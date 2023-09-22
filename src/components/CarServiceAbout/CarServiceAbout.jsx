import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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
import service0101x from '../../images/car-sevices/car-service-about01@1x-min.jpg';
import service0102x from '../../images/car-sevices/car-service-about01@2x-min.jpg';
import service0201x from '../../images/car-sevices/car-service-about02@1x-min.jpg';
import service0202x from '../../images/car-sevices/car-service-about02@2x-min.jpg';
import service0301x from '../../images/car-sevices/car-service-about03@1x-min.jpg';
import service0302x from '../../images/car-sevices/car-service-about03@2x-min.jpg';
import service0401x from '../../images/car-sevices/car-service-about04@1x-min.jpg';
import service0402x from '../../images/car-sevices/car-service-about04@2x-min.jpg';
import service0501x from '../../images/car-sevices/car-service-about05@1x-min.jpg';
import service0502x from '../../images/car-sevices/car-service-about05@2x-min.jpg';
import service0601x from '../../images/car-sevices/car-service-about06@1x-min.jpg';
import service0602x from '../../images/car-sevices/car-service-about06@2x-min.jpg';
import {
  StyledCarServiceButton,
  StyledCarServiceDiv,
  StyledCarServiceH4,
  StyledCarServiceUl,
} from './CarServiceAbout.styled';

const CarServiceAbout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section>
      <StyledContainer>
        <StyledDiv>
          <StyledCircleDiv></StyledCircleDiv>
          <StyledH2>{t('carService.h2')}</StyledH2>
        </StyledDiv>
        <StyledH3>
          {t('carService.h3.0')}
          <StyledSpan>{t('carService.h3.1')}</StyledSpan>
        </StyledH3>
        <StyledP>{t('carService.pList.0')}</StyledP>
        <StyledP>{t('carService.pList.1')}</StyledP>
        <StyledCarServiceUl>
          <li>
            <StyledCarServiceDiv>
              <img
                srcSet={`${service0101x} 1x, ${service0102x} 2x`}
                src={service0101x}
                alt="engine-repair-img"
                loading="lazy"
                width={360}
                height={260}
              />
              <StyledCarServiceH4>
                {t('footer.carServiceList.0')}
              </StyledCarServiceH4>
              <StyledCarServiceButton>
                <svg
                  width="30"
                  height="30"
                  onClick={() => navigate('engine-repair')}
                >
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
                alt="checkpoint-repair-img"
                loading="lazy"
                width={385}
                height={260}
              />
              <StyledCarServiceH4>
                {t('footer.carServiceList.1')}
              </StyledCarServiceH4>
              <StyledCarServiceButton>
                <svg
                  width="30"
                  height="30"
                  onClick={() => navigate('gearbox-repair')}
                >
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
                alt="repair-maintenance-img"
                loading="lazy"
                width={385}
                height={260}
              />
              <StyledCarServiceH4>
                {t('carService.h4List.0')}
              </StyledCarServiceH4>
              <StyledCarServiceButton>
                <svg
                  width="30"
                  height="30"
                  onClick={() => navigate('chassis-repair')}
                >
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv>
              <img
                srcSet={`${service0401x} 1x, ${service0402x} 2x`}
                src={service0401x}
                alt="repair-maintenance-img"
                loading="lazy"
                width={385}
                height={260}
              />
              <StyledCarServiceH4>
                {t('footer.carServiceList.3')}
              </StyledCarServiceH4>
              <StyledCarServiceButton>
                <svg
                  width="30"
                  height="30"
                  onClick={() => navigate('electric-repair')}
                >
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv>
              <img
                srcSet={`${service0501x} 1x, ${service0502x} 2x`}
                src={service0501x}
                alt="repair-maintenance-img"
                loading="lazy"
                width={385}
                height={260}
              />
              <StyledCarServiceH4>
                {t('footer.carServiceList.4')}
              </StyledCarServiceH4>
              <StyledCarServiceButton>
                <svg
                  width="30"
                  height="30"
                  onClick={() => navigate('car-body-repair')}
                >
                  <use href={`${sprite}#icon-arrow-yellow`}></use>
                </svg>
              </StyledCarServiceButton>
            </StyledCarServiceDiv>
          </li>
          <li>
            <StyledCarServiceDiv>
              <img
                srcSet={`${service0601x} 1x, ${service0602x} 2x`}
                src={service0601x}
                alt="repair-maintenance-img"
                loading="lazy"
                width={385}
                height={260}
              />
              <StyledCarServiceH4>
                {t('carService.h4List.1')}
              </StyledCarServiceH4>
              <StyledCarServiceButton>
                <svg
                  width="30"
                  height="30"
                  onClick={() => navigate('extra-services')}
                >
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
export default CarServiceAbout;
