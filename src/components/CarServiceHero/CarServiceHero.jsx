import { useTranslation } from 'react-i18next';
import {
  StyledBenefitsDiv,
  StyledBenefitsDiv01,
  StyledBenefitsDiv02,
  StyledBenefitsP,
  StyledBenefitsUl,
  StyledContainer,
  StyledH1,
  StyledLineDiv,
  StyledNumP,
  StyledNumP01,
  StyledP,
  StyledSpan,
} from 'components/Hero/Hero.styled';
import { StyledBackGroundImage } from './CarServiceHero.styled';
import {
  StyledButtonDiv,
  StyledButtonP,
  StyledCircleDiv,
  StyledSvg,
} from 'components/Header/Header.styled';
import sprite from '../../images/sprite.svg';

export const CarServiceHero = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledBackGroundImage>
        <StyledContainer>
          <StyledH1 style={{ width: 'auto' }}>
            <StyledSpan>{t('carService.h1.0')}</StyledSpan>{' '}
            {t('carService.h1.1')}
          </StyledH1>
          <StyledP>{t('carService.p')}</StyledP>
          <StyledButtonDiv
            style={{ margin: 0, justifyContent: 'normal', gap: '40px' }}
          >
            <StyledCircleDiv></StyledCircleDiv>
            <StyledSvg width="18" height="18">
              <use href={`${sprite}#icon-tools`}></use>
            </StyledSvg>
            <StyledButtonP>{t('carService.buttonText')}</StyledButtonP>
          </StyledButtonDiv>
          <StyledBenefitsUl style={{ marginTop: '40px' }}>
            <li>
              <StyledBenefitsDiv01>
                <StyledNumP01>+4698</StyledNumP01>
                <StyledLineDiv></StyledLineDiv>
                <StyledBenefitsP>{t('hero.benefits.0')}</StyledBenefitsP>
              </StyledBenefitsDiv01>
            </li>
            <li>
              <StyledBenefitsDiv02>
                <StyledNumP>37</StyledNumP>
                <StyledLineDiv></StyledLineDiv>
                <StyledBenefitsP>{t('hero.benefits.1')}</StyledBenefitsP>
              </StyledBenefitsDiv02>
            </li>
            <li>
              <StyledBenefitsDiv>
                <StyledNumP>+15</StyledNumP>
                <StyledLineDiv></StyledLineDiv>
                <StyledBenefitsP>{t('hero.benefits.2')}</StyledBenefitsP>
              </StyledBenefitsDiv>
            </li>
          </StyledBenefitsUl>
        </StyledContainer>
      </StyledBackGroundImage>
    </section>
  );
};
