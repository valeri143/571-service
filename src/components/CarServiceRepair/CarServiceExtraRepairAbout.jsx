import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledMarginDiv,
  StyledFlexDesktopDiv,
  StyledPaddingContainer,
} from './CarServiceRepair.styled';
import { CarServiceRepairForm } from './CarServiceRepairForm';
const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);

export const CarServiceExtraRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv>
            <StyledP>{t('extraRepair.paragraph')}</StyledP>
          </StyledMarginDiv>
          <CarServiceRepairPrice
            h2={'extraRepair.h2'}
            list={'extraRepair.serviceList'}
            price={'extraRepair.priceList'}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
