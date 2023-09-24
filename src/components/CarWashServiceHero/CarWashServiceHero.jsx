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
import sprite from '../../images/sprite.svg';
import { StyledH1 } from 'components/CarServiceRepair/CarServiceRepair.styled';

export const CarWashServiceHero = ({ Bg }) => {
  const { t } = useTranslation();
  return (
    <section>
      <Bg>
        <StyledContainer>
          <StyledH1 style={{ width: 'auto' }}>
            <StyledSpan>{t('carWash.h1.0')}</StyledSpan> {t('carWash.h1.1')}
          </StyledH1>
          <StyledP>{t('carWash.p')}</StyledP>
          <StyledButtonDiv
            style={{
              marginLeft: 0,
              marginRight: 0,
              justifyContent: 'normal',
              gap: '20px',
              paddingRight: '10px',
              maxWidth: 'max-content',
            }}
          >
            <StyledCircleDiv></StyledCircleDiv>
            <StyledSvg width="18" height="18">
              <use href={`${sprite}#icon-car-wash`}></use>
            </StyledSvg>
            <StyledButtonP>{t('carWash.buttonText')}</StyledButtonP>
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
      </Bg>
    </section>
  );
};
