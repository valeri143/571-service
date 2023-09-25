import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledMarginDiv,
  StyledFlexDesktopDiv,
  StyledPaddingContainer,
} from '../CarServiceRepair/CarServiceRepair.styled';
import { CarServiceRepairForm } from 'components/CarServiceRepair/CarServiceRepairForm';
const CarTireServiceTiresRepairPrice = lazy(() =>
  import('components/CarTireServiceRepair/CarTireServiceTiresRepairPrice')
);

export const CarTireServiceChassisMaintenanceAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 hidden>chassisMaintenance</h2>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv>
            <StyledP>{t('chassisMaintenance.p.0')}</StyledP>
            <StyledP>{t('chassisMaintenance.p.1')}</StyledP>
            <StyledP>{t('chassisMaintenance.p.2')}</StyledP>
          </StyledMarginDiv>

          <CarTireServiceTiresRepairPrice
            h2={'chassisMaintenance.h2'}
            price={'chassisMaintenance.priceList'}
            list={'chassisMaintenance.serviceList'}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
