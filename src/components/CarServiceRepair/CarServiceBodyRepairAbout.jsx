import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledSpan,
  StyledDiv,
  StyledSvg,
  StyledUl,
} from './CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';

export const CarServiceBodyRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledP>
          {t('bodyRepair.pAbout.0')} <br />
          <StyledSpan>{t('bodyRepair.pAbout.1')}</StyledSpan>
        </StyledP>
        <StyledUl>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('bodyRepair.list.0')}</StyledP>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('bodyRepair.list.1')}</StyledP>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('bodyRepair.list.2')}</StyledP>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('bodyRepair.list.3')}</StyledP>
            </StyledDiv>
          </li>
        </StyledUl>
        <StyledP>{t('bodyRepair.paragraph.0')}</StyledP>
        <StyledP>{t('bodyRepair.paragraph.1')}</StyledP>
        <StyledP>{t('bodyRepair.paragraph.2')}</StyledP>
        <StyledP>{t('bodyRepair.paragraph.3')}</StyledP>
        <StyledP>{t('bodyRepair.paragraph.4')}</StyledP>
      </StyledContainer>
    </section>
  );
};
