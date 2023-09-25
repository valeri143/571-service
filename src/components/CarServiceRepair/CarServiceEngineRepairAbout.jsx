import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  StyledP,
  StyledSpan,
  StyledDiv,
  StyledSvg,
  StyledFlexDesktopDiv,
  StyledGridUl,
  StyledMarginDivCleaning,
  StyledPaddingContainer,
} from './CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';
import { CarServiceRepairForm } from './CarServiceRepairForm';
const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);
export const StyledTransformCleaning = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: -120px;
  }
  @media screen and (min-width: 1512px) {
    margin-top: 0;
    transform: translateY(-40%);
  }
`;
export const CarServiceEngineRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDivCleaning>
            <StyledP>{t('engineRepair.paragraph.0')}</StyledP>
            <StyledP>{t('engineRepair.paragraph.1')}</StyledP>
            <StyledP>
              <StyledSpan>{t('engineRepair.paragraph.2')}</StyledSpan>
              {t('engineRepair.paragraph.3')}
            </StyledP>
            <StyledGridUl>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('engineRepair.list.0')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('engineRepair.list.1')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('engineRepair.list.2')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('engineRepair.list.3')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('engineRepair.list.4')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('engineRepair.list.5')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('engineRepair.list.6')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('engineRepair.list.7')}</StyledP>
                </StyledDiv>
              </li>
            </StyledGridUl>
            <StyledP>{t('engineRepair.paragraph2.0')}</StyledP>
            <StyledP>{t('engineRepair.paragraph2.1')}</StyledP>
            <StyledP>{t('engineRepair.paragraph2.2')}</StyledP>
          </StyledMarginDivCleaning>
          <CarServiceRepairPrice
            h2={'engineRepair.h2'}
            list={'engineRepair.serviceList'}
            price={'engineRepair.priceList'}
            Transform={StyledTransformCleaning}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
