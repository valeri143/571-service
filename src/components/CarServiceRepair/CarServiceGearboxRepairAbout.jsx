import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledMarginDiv,
  StyledPaddingContainer,
  StyledFlexDesktopDiv,
} from './CarServiceRepair.styled';
import { CarServiceRepairForm } from './CarServiceRepairForm';

const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);

export const CarServiceGearboxRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv style={{ marginLeft: '5px' }}>
            <StyledP>{t('gearboxRepair.paragraph.0')}</StyledP>
            <StyledP>{t('gearboxRepair.paragraph.1')}</StyledP>
            <StyledP>{t('gearboxRepair.paragraph.2')}</StyledP>
          </StyledMarginDiv>

          <CarServiceRepairPrice
            h2={'gearboxRepair.h2'}
            list={'gearboxRepair.serviceList'}
            price={'gearboxRepair.priceList'}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
