import { useTranslation } from 'react-i18next';
import { lazy } from 'react';
import {
  StyledP,
  StyledDiv,
  StyledSvg,
  StyledFlexDesktopDiv,
  StyledPInUl,
  StyledPaddingContainer,
  StyledGridUl,
  StyledMarginDiv,
} from '../CarServiceRepair/CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';
import { CarServiceRepairForm } from 'components/CarServiceRepair/CarServiceRepairForm';

const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);
export const CarWashServiceExtraAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv>
            <StyledP>{t('extra.p')}</StyledP>
            <StyledGridUl>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('extra.list.0')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('extra.list.1')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('extra.list.2')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('extra.list.3')}</StyledPInUl>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledPInUl>{t('extra.list.4')}</StyledPInUl>
                </StyledDiv>
              </li>
            </StyledGridUl>

            <StyledP>{t('extra.paragraph.0')}</StyledP>
            <StyledP>{t('extra.paragraph.1')}</StyledP>
            <StyledP>{t('extra.paragraph.2')}</StyledP>
          </StyledMarginDiv>
          <CarServiceRepairPrice
            h2={'extra.h2'}
            list={'extra.serviceList'}
            price={'extra.priceList'}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
