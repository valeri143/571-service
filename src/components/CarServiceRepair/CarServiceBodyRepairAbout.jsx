import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledSpan,
  StyledDiv,
  StyledSvg,
  StyledFlexDesktopDiv,
  StyledGridUl,
  StyledPInUl,
  StyledPaddingContainer,
  StyledMarginDiv,
} from './CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';
import { CarServiceRepairForm } from './CarServiceRepairForm';
const CarServiceEngineRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);

export const CarServiceBodyRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv>
            <StyledP>
              {t('bodyRepair.pAbout.0')} <br />
              <StyledSpan>{t('bodyRepair.pAbout.1')}</StyledSpan>
            </StyledP>
            <StyledGridUl>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('bodyRepair.list.0')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('bodyRepair.list.1')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('bodyRepair.list.2')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('bodyRepair.list.3')}</StyledPInUl>
                </StyledDiv>
              </li>
            </StyledGridUl>
            <StyledP>{t('bodyRepair.paragraph.0')}</StyledP>
            <StyledP>{t('bodyRepair.paragraph.1')}</StyledP>
            <StyledP>{t('bodyRepair.paragraph.2')}</StyledP>
            <StyledP>{t('bodyRepair.paragraph.3')}</StyledP>
            <StyledP>{t('bodyRepair.paragraph.4')}</StyledP>
          </StyledMarginDiv>

          <CarServiceEngineRepairPrice
            h2={'bodyRepair.h2'}
            list={'bodyRepair.serviceList'}
            price={'bodyRepair.priceList'}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
