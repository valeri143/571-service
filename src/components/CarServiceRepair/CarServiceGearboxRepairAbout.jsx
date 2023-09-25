import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  StyledP,
  StyledMarginDiv,
  StyledFlexDesktopDivHeight,
  StyledPaddingContainer,
} from './CarServiceRepair.styled';
import { CarServiceRepairForm } from './CarServiceRepairForm';

const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);

const StyledTransformCleaning = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: -120px;
  }
  @media screen and (min-width: 1512px) {
    margin-top: 0;
    transform: translateY(-120%);
  }
`;

export const CarServiceGearboxRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDivHeight>
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
            Transform={StyledTransformCleaning}
          />
        </StyledFlexDesktopDivHeight>
      </StyledPaddingContainer>
    </section>
  );
};
