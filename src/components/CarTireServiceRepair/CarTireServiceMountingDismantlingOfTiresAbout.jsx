import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledSpan,
  StyledDiv,
  StyledSvg,
  StyledUl,
  StyledMarginDiv,
  StyledFlexDesktopDiv,
} from '../CarServiceRepair/CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';
import { CarServiceRepairForm } from 'components/CarServiceRepair/CarServiceRepairForm';

export const CarTireServiceMountingDismantlingOfTiresAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 hidden>MountingDismantlingOfTires</h2>
      <StyledContainer>
        <StyledFlexDesktopDiv>
          <StyledMarginDiv>
            <StyledP>{t('mountingDismantlingOfTires.pAbout.0')}</StyledP>
            <StyledP>{t('mountingDismantlingOfTires.pAbout.1')}</StyledP>
            <StyledSpan>{t('mountingDismantlingOfTires.pAbout.2')}</StyledSpan>
            <ol>
              <li>{t('mountingDismantlingOfTires.pAbout.3')}</li>
              <li>{t('mountingDismantlingOfTires.pAbout.4')}</li>
              <li>{t('mountingDismantlingOfTires.pAbout.5')}</li>
              <li>{t('mountingDismantlingOfTires.pAbout.6')}</li>
              <li>{t('mountingDismantlingOfTires.pAbout.7')}</li>
            </ol>
            <StyledSpan>{t('mountingDismantlingOfTires.pAbout.8')}</StyledSpan>
            <StyledUl>
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
            </StyledUl>
            <StyledP>{t('mountingDismantlingOfTires.paragraph.0')}</StyledP>
            <StyledP>{t('mountingDismantlingOfTires.paragraph.1')}</StyledP>
          </StyledMarginDiv>
          <CarServiceRepairForm />
        </StyledFlexDesktopDiv>
      </StyledContainer>
    </section>
  );
};
