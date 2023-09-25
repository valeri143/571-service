import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledSpan,
  StyledDiv,
  StyledSvg,
  StyledFlexDesktopDiv,
  StyledPInUl,
  StyledMarginDiv,
  StyledGridUl,
  StyledPaddingContainer,
} from '../CarServiceRepair/CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';
import { CarServiceRepairForm } from 'components/CarServiceRepair/CarServiceRepairForm';

const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);

export const CarWashServiceCleaningAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv>
            <StyledP>
              {t('cleaning.pAbout.0')} <br />
              <StyledSpan>{t('cleaning.pAbout.1')}</StyledSpan>
            </StyledP>
            <StyledGridUl>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('cleaning.list.0')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('cleaning.list.1')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('cleaning.list.2')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('cleaning.list.3')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('cleaning.list.4')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('cleaning.list.5')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('cleaning.list.6')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('cleaning.list.7')}</StyledPInUl>
                </StyledDiv>
              </li>
            </StyledGridUl>
            <StyledP>{t('cleaning.paragraph.0')}</StyledP>
            <StyledP>{t('cleaning.paragraph.1')}</StyledP>
          </StyledMarginDiv>
          <CarServiceRepairPrice
            h2={'cleaning.h2'}
            list={'cleaning.serviceList'}
            price={'cleaning.priceList'}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
