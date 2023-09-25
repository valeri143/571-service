import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledP } from 'components/Hero/Hero.styled';
import {
  StyledButtonDiv,
  StyledButtonP,
  StyledCircleDiv,
  StyledSvg,
} from 'components/Header/Header.styled';
import sprite from '../../images/sprite.svg';
import { StyledH1 } from './CarServiceRepair.styled';
import { scrollToForm } from 'helpers/scrollToForm';

export const CarServiceRepairHero = ({ h1, p, style, Bg, maxWidth }) => {
  const { t } = useTranslation();
  return (
    <section>
      <Bg>
        <StyledContainer>
          <StyledH1 style={{ width: 'auto', maxWidth }}>{t(`${h1}`)}</StyledH1>
          {p ? (
            <>
              <StyledP>{t(`${p}`)}</StyledP>
              <StyledButtonDiv
                style={{ margin: 0, justifyContent: 'normal', gap: '40px' }}
                onClick={scrollToForm}
              >
                <StyledCircleDiv></StyledCircleDiv>
                <StyledSvg width="18" height="18">
                  <use href={`${sprite}#icon-tools`}></use>
                </StyledSvg>
                <StyledButtonP>{t('carService.buttonText')}</StyledButtonP>
              </StyledButtonDiv>
            </>
          ) : (
            <StyledButtonDiv style={style} onClick={scrollToForm}>
              <StyledCircleDiv></StyledCircleDiv>
              <StyledSvg width="18" height="18">
                <use href={`${sprite}#icon-tools`}></use>
              </StyledSvg>
              <StyledButtonP>{t('carService.buttonText')}</StyledButtonP>
            </StyledButtonDiv>
          )}
        </StyledContainer>
      </Bg>
    </section>
  );
};
