import { useTranslation } from 'react-i18next';
import {
  StyledBenefitsDiv,
  StyledBenefitsDiv01,
  StyledBenefitsDiv02,
  StyledBenefitsP,
  StyledBenefitsUl,
  StyledContainer,
  StyledLineDiv,
  StyledNumP,
  StyledNumP01,
  StyledP,
  StyledSpan,
} from 'components/Hero/Hero.styled';
import {
  StyledButtonDiv,
  StyledButtonP,
  StyledCircleDiv,
  StyledSvg,
} from 'components/Header/Header.styled';
import { StyledH1 } from 'components/CarServiceRepair/CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';
import { StyledBackGroundImage } from './CarServiceWheelAlignmentRepair.styled';
import { scrollToForm } from 'helpers/scrollToForm';

export const CarServiceWheelAlignmentRepairHero = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledBackGroundImage>
        <StyledContainer>
          <StyledH1 style={{ width: 'auto' }}>
            <StyledSpan>
              {t('wheelAlignment.h1.0')} <br />{' '}
            </StyledSpan>{' '}
            {t('wheelAlignment.h1.1')}
          </StyledH1>
          <StyledP>{t('wheelAlignment.p')}</StyledP>
          <StyledButtonDiv
            style={{
              marginLeft: 0,
              marginRight: 0,
              justifyContent: 'normal',
              gap: '40px',
            }}
            onClick={scrollToForm}
          >
            <StyledCircleDiv></StyledCircleDiv>
            <StyledSvg width="18" height="18">
              <use href={`${sprite}#icon-car-wash`}></use>
            </StyledSvg>
            <StyledButtonP>{t('wheelAlignment.buttonText')}</StyledButtonP>
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
