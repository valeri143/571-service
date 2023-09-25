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
export const CarTireServiceTiresRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 hidden>tireRepair</h2>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv>
            <StyledP>{t('tireRepair.paragraph.0')}</StyledP>
            <StyledP>{t('tireRepair.paragraph.1')}</StyledP>
          </StyledMarginDiv>
          <CarTireServiceTiresRepairPrice
            h2={'tireRepair.h2'}
            price={'tireRepair.priceList'}
            list={'tireRepair.serviceList'}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
