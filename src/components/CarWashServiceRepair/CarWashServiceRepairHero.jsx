import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledP } from 'components/Hero/Hero.styled';
import { StyledH1 } from 'components/CarServiceRepair/CarServiceRepair.styled';
import {
  StyledButtonDiv,
  StyledButtonP,
  StyledCircleDiv,
  StyledSvg,
} from 'components/Header/Header.styled';
import sprite from '../../images/sprite.svg';

export const CarWashServiceRepairHero = ({ h1, p, buttonText, style, Bg }) => {
  const { t } = useTranslation();
  return (
    <section>
      <Bg>
        <StyledContainer>
          <StyledH1 style={{ width: 'auto' }}>{t(`${h1}`)}</StyledH1>
          {p ? (
            <>
              <StyledP>{t(`${p}`)}</StyledP>
              <StyledButtonDiv style={style}>
                <StyledCircleDiv></StyledCircleDiv>
                <StyledSvg width="18" height="18">
                  <use href={`${sprite}#icon-car-wash`}></use>
                </StyledSvg>
                <StyledButtonP href="#form">{t(`${buttonText}`)}</StyledButtonP>
              </StyledButtonDiv>
            </>
          ) : (
            <StyledButtonDiv style={style}>
              <StyledCircleDiv></StyledCircleDiv>
              <StyledSvg width="18" height="18">
                <use href={`${sprite}#icon-car-wash`}></use>
              </StyledSvg>
              <StyledButtonP>{t(`${buttonText}`)}</StyledButtonP>
            </StyledButtonDiv>
          )}
        </StyledContainer>
      </Bg>
    </section>
  );
};
