import { useTranslation } from 'react-i18next';
import {
  StyledBackGroundImage,
  StyledAnimationDiv01,
  StyledAnimationDiv02,
  StyledAnimationDiv03,
  StyledAnimationP,
  StyledAnimationUl,
  StyledContainer,
  StyledH1,
  StyledImg,
  StyledP,
  StyledSpan,
  StyledBenefitsUl,
  StyledBenefitsDiv,
  StyledBenefitsP,
  StyledLineDiv,
  StyledNumP,
  StyledBenefitsDiv01,
  StyledBenefitsDiv02,
  StyledNumP01,
} from './Hero.styled';
import sprite from '../../images/sprite.svg';
import bgCarMobile1x from '../../images/mobile/backgrounds/car-bg@1x-min.png';
import bgCarMobile2x from '../../images/mobile/backgrounds/car-bg@2x-min.png';
import {
  StyledButtonDiv,
  StyledButtonP,
  StyledCircleDiv,
  StyledSvg,
} from 'components/Header/Header.styled';
export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledBackGroundImage>
        <StyledContainer>
          <StyledH1>
            {t('hero.h1.0')} <span>{t('hero.h1.1')}</span>
            <StyledSpan>{t('hero.h1.2')}</StyledSpan> {t('hero.h1.3')}
          </StyledH1>
          <StyledP>{t('hero.p')}</StyledP>
          <StyledButtonDiv style={{ margin: 0 }}>
            <StyledCircleDiv></StyledCircleDiv>
            <StyledSvg width="18" height="18">
              <use href={`${sprite}#icon-tools`}></use>
            </StyledSvg>
            <StyledButtonP>{t('header.buttonText')}</StyledButtonP>
          </StyledButtonDiv>
          <div>
            <StyledAnimationUl>
              <li>
                <StyledAnimationDiv01>
                  <StyledAnimationP>
                    {t('hero.animationText.0')}
                  </StyledAnimationP>
                </StyledAnimationDiv01>
              </li>
              <li>
                <StyledAnimationDiv02>
                  <StyledAnimationP>
                    {t('hero.animationText.1')}
                  </StyledAnimationP>
                </StyledAnimationDiv02>
              </li>
              <li>
                <StyledAnimationDiv03>
                  <StyledAnimationP>
                    {t('hero.animationText.2')}
                  </StyledAnimationP>
                </StyledAnimationDiv03>
              </li>
            </StyledAnimationUl>
            <StyledImg
              srcSet={`${bgCarMobile1x} 1x, ${bgCarMobile2x} 2x`}
              src={bgCarMobile1x}
              width={702}
              alt="background-car"
              loading="lazy"
            />
          </div>
          <StyledBenefitsUl>
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
