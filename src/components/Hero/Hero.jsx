import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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
  StyledDH1,
  StyledAnimationDiv,
} from './Hero.styled';
import sprite from '../../images/sprite.svg';
import bgCarMobile1x from '../../images/mobile/backgrounds/car-bg@1x-min.png';
import bgCarMobile2x from '../../images/mobile/backgrounds/car-bg@2x-min.png';
import bgCarDesktop1x from '../../images/desktop/backgrounds/bg-car@1x-min.png';
import bgCarDesktop2x from '../../images/desktop/backgrounds/bg-car@2x-min.png';

import {
  StyledButtonDiv,
  StyledButtonP,
  StyledCircleDiv,
  StyledSvg,
} from 'components/Header/Header.styled';

export const animation = {
  hidden: {
    y: 300,
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledBackGroundImage>
        <StyledContainer>
          <StyledAnimationDiv>
            <StyledH1>
              {t('hero.h1.0')} <span>{t('hero.h1.1')}</span>
              <StyledSpan>{t('hero.h1.2')}</StyledSpan> {t('hero.h1.3')}
            </StyledH1>
            <StyledDH1>
              {t('hero.h1.0')}
              {t('hero.h1.1')}
              <StyledSpan>{t('hero.h1.2')}</StyledSpan> {t('hero.h1.3')}
            </StyledDH1>
            <StyledP>{t('hero.p')}</StyledP>
            <StyledButtonDiv style={{ margin: 0 }}>
              <StyledCircleDiv></StyledCircleDiv>
              <StyledSvg width="18" height="18">
                <use href={`${sprite}#icon-tools`}></use>
              </StyledSvg>
              <StyledButtonP>{t('header.buttonText')}</StyledButtonP>
            </StyledButtonDiv>
          </StyledAnimationDiv>
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
            <StyledImg>
              <source
                media="(min-width: 768px)"
                srcSet={`${bgCarDesktop1x} 1x, ${bgCarDesktop2x} 2x`}
                sizes="(min-width: 768px) 100vw, 1512px"
              />
              <img
                srcSet={`${bgCarMobile1x} 1x, ${bgCarMobile2x} 2x`}
                src={bgCarMobile1x}
                sizes="(max-width: 768px) 100vw, 702px"
                alt="background-car"
                loading="lazy"
              />
            </StyledImg>
          </div>
          <StyledBenefitsUl
            as={motion.ul}
            initial={window.innerWidth >= 1512 ? 'hidden' : 'visible'}
            whileInView="visible"
            viewport={{ once: true }}
            variants={animation}
          >
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
