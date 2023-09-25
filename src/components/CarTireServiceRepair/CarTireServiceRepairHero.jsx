import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledP } from 'components/Hero/Hero.styled';
import {
  StyledButtonDiv,
  StyledButtonP,
  StyledCircleDiv,
  StyledSvg,
} from 'components/Header/Header.styled';
import sprite from '../../images/sprite.svg';
import { StyledH1 } from 'components/CarServiceRepair/CarServiceRepair.styled';

export const CarTireServiceRepairHero = ({ h1, p, style, Bg, maxWidth }) => {
  const { t } = useTranslation();
  return (
    <section>
      <Bg>
        <StyledContainer>
          <StyledH1 style={{ width: 'auto', maxWidth }}>{t(`${h1}`)}</StyledH1>
          {p ? (
            <>
              <StyledP>{t(`${p}`)}</StyledP>
              <StyledButtonDiv style={style}>
                <StyledCircleDiv></StyledCircleDiv>
                <StyledSvg width="18" height="18">
                  <use href={`${sprite}#icon-tire`}></use>
                </StyledSvg>
                <StyledButtonP>{t('carTire.buttonText')}</StyledButtonP>
              </StyledButtonDiv>
            </>
          ) : (
            <StyledButtonDiv style={style}>
              <StyledCircleDiv></StyledCircleDiv>
              <StyledSvg width="18" height="18">
                <use href={`${sprite}#icon-tire`}></use>
              </StyledSvg>
              <StyledButtonP>{t('carTire.buttonText')}</StyledButtonP>
            </StyledButtonDiv>
          )}
        </StyledContainer>
      </Bg>
    </section>
  );
};
