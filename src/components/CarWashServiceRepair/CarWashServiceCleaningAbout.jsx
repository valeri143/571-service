import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledSpan,
  StyledDiv,
  StyledSvg,
  StyledUl,
} from '../CarServiceRepair/CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';

export const CarWashServiceCleaningAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledP>
          {t('cleaning.pAbout.0')} <br />
          <StyledSpan>{t('cleaning.pAbout.1')}</StyledSpan>
        </StyledP>
        <StyledUl>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('cleaning.list.0')}</StyledP>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('cleaning.list.1')}</StyledP>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('cleaning.list.2')}</StyledP>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('cleaning.list.3')}</StyledP>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('cleaning.list.4')}</StyledP>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('cleaning.list.5')}</StyledP>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('cleaning.list.6')}</StyledP>
            </StyledDiv>
          </li>
          <li>
            <StyledDiv>
              <StyledSvg width="30" height="30">
                <use href={`${sprite}#icon-check-yellow`}></use>
              </StyledSvg>
              <StyledP>{t('cleaning.list.7')}</StyledP>
            </StyledDiv>
          </li>
        </StyledUl>
        <StyledP>{t('cleaning.paragraph.0')}</StyledP>
        <StyledP>{t('cleaning.paragraph.1')}</StyledP>
      </StyledContainer>
    </section>
  );
};
