import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledDiv,
  StyledSvg,
  StyledUl,
  StyledMarginDiv,
  StyledFlexDesktopDiv,
} from '../CarServiceRepair/CarServiceRepair.styled';
import sprite from '../../images/sprite.svg';
import { CarServiceRepairForm } from 'components/CarServiceRepair/CarServiceRepairForm';

export const CarWashServiceExtraAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledFlexDesktopDiv>
          <StyledMarginDiv>
            <StyledP>{t('extra.p')}</StyledP>
            <StyledUl>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('extra.list.0')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('extra.list.1')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('extra.list.2')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('extra.list.3')}</StyledP>
                </StyledDiv>
              </li>
              <li>
                <StyledDiv>
                  <StyledSvg width="30" height="30">
                    <use href={`${sprite}#icon-check-yellow`}></use>
                  </StyledSvg>
                  <StyledP>{t('extra.list.4')}</StyledP>
                </StyledDiv>
              </li>
            </StyledUl>
            <StyledP>{t('extra.paragraph.0')}</StyledP>
            <StyledP>{t('extra.paragraph.1')}</StyledP>
            <StyledP>{t('extra.paragraph.2')}</StyledP>
          </StyledMarginDiv>
          <CarServiceRepairForm />
        </StyledFlexDesktopDiv>
      </StyledContainer>
    </section>
  );
};
