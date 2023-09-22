import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledH1,
  StyledP,
} from 'components/Hero/Hero.styled';
import { StyledBackGroundImage } from './CarServiceRepair.styled';
import {
  StyledButtonDiv,
  StyledButtonP,
  StyledCircleDiv,
  StyledSvg,
} from 'components/Header/Header.styled';
import sprite from '../../images/sprite.svg';

export const CarServiceRepairHero = ({ h1, p, style }) => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledBackGroundImage>
        <StyledContainer>
          <StyledH1 style={{ width: 'auto' }}>{t(`${h1}`)}</StyledH1>
          {p ? (
            <>
              <StyledP>{t(`${p}`)}</StyledP>
              <StyledButtonDiv
                style={{ margin: 0, justifyContent: 'normal', gap: '40px' }}
              >
                <StyledCircleDiv></StyledCircleDiv>
                <StyledSvg width="18" height="18">
                  <use href={`${sprite}#icon-tools`}></use>
                </StyledSvg>
                <StyledButtonP>{t('carService.buttonText')}</StyledButtonP>
              </StyledButtonDiv>
            </>
          ) : (
            <StyledButtonDiv style={style}>
              <StyledCircleDiv></StyledCircleDiv>
              <StyledSvg width="18" height="18">
                <use href={`${sprite}#icon-tools`}></use>
              </StyledSvg>
              <StyledButtonP>{t('carService.buttonText')}</StyledButtonP>
            </StyledButtonDiv>
          )}
        </StyledContainer>
      </StyledBackGroundImage>
    </section>
  );
};
