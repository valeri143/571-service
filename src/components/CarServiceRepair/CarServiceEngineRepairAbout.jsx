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

export const CarServiceEngineRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledP>{t('engineRepair.paragraph.0')}</StyledP>
        <StyledP>{t('engineRepair.paragraph.1')}</StyledP>
        <StyledP>
          <StyledSpan>{t('engineRepair.paragraph.2')}</StyledSpan>
          {t('engineRepair.paragraph.3')}
        </StyledP>
        <StyledUl>
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
        </StyledUl>
        <StyledP>{t('engineRepair.paragraph2.0')}</StyledP>
        <StyledP>{t('engineRepair.paragraph2.1')}</StyledP>
        <StyledP>{t('engineRepair.paragraph2.2')}</StyledP>
      </StyledContainer>
    </section>
  );
};
