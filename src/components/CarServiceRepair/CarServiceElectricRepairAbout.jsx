import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledFlexDesktopDiv,
  StyledPaddingContainer,
  StyledMarginDiv,
} from './CarServiceRepair.styled';
import { CarServiceRepairForm } from './CarServiceRepairForm';
const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);

export const CarServiceElectricRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv>
            <StyledP>{t('electricRepair.paragraph')} </StyledP>
          </StyledMarginDiv>

          <CarServiceRepairPrice
            h2={'electricRepair.h2'}
            list={'electricRepair.serviceList'}
            price={'electricRepair.priceList'}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
