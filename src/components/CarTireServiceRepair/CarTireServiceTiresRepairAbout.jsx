import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
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
export const StyledTransform = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: -120px;
  }
  @media screen and (min-width: 1512px) {
    margin-top: 0;
    transform: translateY(-25%);
  }
`;
export const CarTireServiceTiresRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 hidden>tireRepair</h2>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv style={{ marginLeft: '15px' }}>
            <StyledP>{t('tireRepair.paragraph.0')}</StyledP>
            <StyledP>{t('tireRepair.paragraph.1')}</StyledP>
          </StyledMarginDiv>
          <CarTireServiceTiresRepairPrice
            h2={'tireRepair.h2'}
            price={'tireRepair.priceList'}
            list={'tireRepair.serviceList'}
            Transform={StyledTransform}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
