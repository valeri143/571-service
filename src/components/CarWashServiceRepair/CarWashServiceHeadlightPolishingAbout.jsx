import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledFlexDesktopDiv,
  StyledMarginDiv,
} from '../CarServiceRepair/CarServiceRepair.styled';
import { CarServiceRepairForm } from '../CarServiceRepair/CarServiceRepairForm';

export const CarWashServiceHeadlightPolishingAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledFlexDesktopDiv>
          <StyledMarginDiv>
            <StyledP>{t('headlightPolishing.paragraph.0')}</StyledP>
            <StyledP>{t('headlightPolishing.paragraph.1')}</StyledP>
            <StyledP>{t('headlightPolishing.paragraph.2')}</StyledP>
          </StyledMarginDiv>
          <CarServiceRepairForm />
        </StyledFlexDesktopDiv>
      </StyledContainer>
    </section>
  );
};
