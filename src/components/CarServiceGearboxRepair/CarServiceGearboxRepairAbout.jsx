import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
} from '../CarServiceEngineRepair/CarServiceEngineRepair.styled';

export const CarServiceGearboxRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer>
        <StyledP>{t('gearboxRepair.paragraph.0')}</StyledP>
        <StyledP>{t('gearboxRepair.paragraph.1')}</StyledP>
        <StyledP>{t('gearboxRepair.paragraph.2')}</StyledP>
      </StyledContainer>
    </section>
  );
};
