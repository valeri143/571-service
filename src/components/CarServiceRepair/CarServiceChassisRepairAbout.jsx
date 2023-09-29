import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledSpan,
  StyledDiv,
  StyledSvg,
  StyledFlexDesktopDiv,
  StyledGridUl,
  StyledMarginDiv,
  StyledPaddingContainerMore,
} from './CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';
import { CarServiceRepairForm } from './CarServiceRepairForm';
const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);

export const CarServiceChassisRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainerMore style={{ paddingLeft: '5px' }}>
        <StyledFlexDesktopDiv style={{ gap: 0 }}>
          <CarServiceRepairForm />
          <StyledMarginDiv>
            <StyledP>
              {t('chassisRepair.p.0')} <br />
              <StyledSpan>{t('chassisRepair.p.1')}</StyledSpan>
            </StyledP>
            <StyledGridUl>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('chassisRepair.list.0')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('chassisRepair.list.1')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('chassisRepair.list.2')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('chassisRepair.list.3')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('chassisRepair.list.4')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('chassisRepair.list.5')}</StyledP>
                </StyledDiv>
              </li>
            </StyledGridUl>
            <StyledP>{t('chassisRepair.paragraph.0')}</StyledP>
            <StyledP>{t('chassisRepair.paragraph.1')}</StyledP>
            <StyledP>{t('chassisRepair.paragraph.2')}</StyledP>
            <StyledP>{t('chassisRepair.paragraph.3')}</StyledP>
            <StyledP>{t('chassisRepair.paragraph.4')}</StyledP>
            <StyledP>{t('chassisRepair.paragraph.5')}</StyledP>
            <StyledP>{t('chassisRepair.paragraph.6')}</StyledP>
          </StyledMarginDiv>
          <CarServiceRepairPrice
            h2={'chassisRepair.h2'}
            list={'chassisRepair.serviceList'}
            price={'chassisRepair.priceList'}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainerMore>
    </section>
  );
};
