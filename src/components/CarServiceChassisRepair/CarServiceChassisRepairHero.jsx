import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledH1 } from 'components/Hero/Hero.styled';
import { StyledBackGroundImage } from '../CarServiceEngineRepair/CarServiceEngineRepair.styled';
import {
  StyledButtonDiv,
  StyledButtonP,
  StyledCircleDiv,
  StyledSvg,
} from 'components/Header/Header.styled';
import sprite from '../../images/sprite.svg';
export const CarServiceChassisRepairHero = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledBackGroundImage>
        <StyledContainer>
          <StyledH1 style={{ width: 'auto' }}>
            {t('footer.carServiceList.2')}
          </StyledH1>
          <StyledButtonDiv
            style={{
              margin: 0,
              justifyContent: 'normal',
              gap: '40px',
              marginTop: '40px',
            }}
          >
            <StyledCircleDiv></StyledCircleDiv>
            <StyledSvg width="18" height="18">
              <use href={`${sprite}#icon-tools`}></use>
            </StyledSvg>
            <StyledButtonP>{t('carService.buttonText')}</StyledButtonP>
          </StyledButtonDiv>
        </StyledContainer>
      </StyledBackGroundImage>
    </section>
  );
};
