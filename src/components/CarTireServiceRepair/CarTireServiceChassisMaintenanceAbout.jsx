import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledMarginDiv,
  StyledFlexDesktopDiv,
} from '../CarServiceRepair/CarServiceRepair.styled';
import { CarServiceRepairForm } from 'components/CarServiceRepair/CarServiceRepairForm';

export const CarTireServiceChassisMaintenanceAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 hidden>chassisMaintenance</h2>
      <StyledContainer>
        <StyledFlexDesktopDiv>
          <StyledMarginDiv>
            <StyledP>{t('chassisMaintenance.p.0')}</StyledP>
            <StyledP>{t('chassisMaintenance.p.1')}</StyledP>
            <StyledP>{t('chassisMaintenance.p.2')}</StyledP>
          </StyledMarginDiv>
          <CarServiceRepairForm />
        </StyledFlexDesktopDiv>
      </StyledContainer>
    </section>
  );
};
