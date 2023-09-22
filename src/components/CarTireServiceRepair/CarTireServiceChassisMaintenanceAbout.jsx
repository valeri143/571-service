import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
} from '../CarServiceRepair/CarServiceRepair.styled';

export const CarTireServiceChassisMaintenanceAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 hidden>chassisMaintenance</h2>
      <StyledContainer>
        <StyledP>{t('chassisMaintenance.p.0')}</StyledP>
        <StyledP>{t('chassisMaintenance.p.1')}</StyledP>
        <StyledP>{t('chassisMaintenance.p.2')}</StyledP>
      </StyledContainer>
    </section>
  );
};
