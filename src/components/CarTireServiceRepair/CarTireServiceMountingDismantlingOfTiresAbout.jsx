import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledDiv,
  StyledSvg,
  StyledFlexDesktopDiv,
  StyledGridUl,
  StyledPaddingContainer,
  StyledMarginDiv,
} from '../CarServiceRepair/CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';
import { CarServiceRepairForm } from 'components/CarServiceRepair/CarServiceRepairForm';
import { StyledOl, StyledSpanTire } from './CarTireServiceRepair.styled';
const CarTireServiceRepairPrice = lazy(() =>
  import('components/CarTireServiceRepair/CarTireServiceRepairPrice')
);

export const CarTireServiceMountingDismantlingOfTiresAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 hidden>MountingDismantlingOfTires</h2>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv>
            <StyledP>{t('mountingDismantlingOfTires.pAbout.0')}</StyledP>
            <StyledP>{t('mountingDismantlingOfTires.pAbout.1')}</StyledP>
            <StyledSpanTire>
              {t('mountingDismantlingOfTires.pAbout.2')}
            </StyledSpanTire>
            <StyledOl>
              <li>{t('mountingDismantlingOfTires.pAbout.3')}</li>
              <li>{t('mountingDismantlingOfTires.pAbout.4')}</li>
              <li>{t('mountingDismantlingOfTires.pAbout.5')}</li>
              <li>{t('mountingDismantlingOfTires.pAbout.6')}</li>
              <li>{t('mountingDismantlingOfTires.pAbout.7')}</li>
            </StyledOl>
            <StyledSpanTire>
              {t('mountingDismantlingOfTires.pAbout.8')}
            </StyledSpanTire>
            <StyledGridUl>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('mountingDismantlingOfTires.list.0')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('mountingDismantlingOfTires.list.1')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('mountingDismantlingOfTires.list.2')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('mountingDismantlingOfTires.list.3')}</StyledP>
                </StyledDiv>
              </li>
            </StyledGridUl>
            <StyledP>{t('mountingDismantlingOfTires.paragraph.0')}</StyledP>
            <StyledP>{t('mountingDismantlingOfTires.paragraph.1')}</StyledP>
          </StyledMarginDiv>
          <CarTireServiceRepairPrice />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
