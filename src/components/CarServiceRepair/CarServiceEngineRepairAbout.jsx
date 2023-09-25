import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledSpan,
  StyledDiv,
  StyledSvg,
  StyledFlexDesktopDiv,
  StyledGridUl,
  StyledPaddingContainer,
  StyledMarginDiv,
} from './CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';
import { CarServiceRepairForm } from './CarServiceRepairForm';
const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);

export const CarServiceEngineRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv>
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
          </StyledMarginDiv>
          <CarServiceRepairPrice
            h2={'engineRepair.h2'}
            list={'engineRepair.serviceList'}
            price={'engineRepair.priceList'}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
