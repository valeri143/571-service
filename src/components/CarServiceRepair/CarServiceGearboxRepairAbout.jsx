import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledMarginDiv,
  StyledFlexDesktopDiv,
} from './CarServiceRepair.styled';
import { CarServiceRepairForm } from './CarServiceRepairForm';

export const CarServiceGearboxRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledFlexDesktopDiv>
          <StyledMarginDiv>
            <StyledP>{t('gearboxRepair.paragraph.0')}</StyledP>
            <StyledP>{t('gearboxRepair.paragraph.1')}</StyledP>
            <StyledP>{t('gearboxRepair.paragraph.2')}</StyledP>
          </StyledMarginDiv>
          <CarServiceRepairForm />
        </StyledFlexDesktopDiv>
      </StyledContainer>
    </section>
  );
};
