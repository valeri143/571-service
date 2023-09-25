import { lazy } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledMarginDiv,
  StyledFlexDesktopDivHeadlight,
} from '../CarServiceRepair/CarServiceRepair.styled';
import { CarServiceRepairForm } from '../CarServiceRepair/CarServiceRepairForm';

const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);

const StyledTransformDiv = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: -120px;
  }
  @media screen and (min-width: 1512px) {
    margin-top: 0;
    transform: translateY(-300%);
  }
`;

export const CarWashServiceHeadlightPolishingAbout = () => {
  const { t } = useTranslation();

  return (
    <section>
      <StyledContainer>
        <StyledFlexDesktopDivHeadlight>
          <CarServiceRepairForm />
          <StyledMarginDiv>
            <StyledP>{t('headlightPolishing.paragraph.0')}</StyledP>
            <StyledP>{t('headlightPolishing.paragraph.1')}</StyledP>
            <StyledP>{t('headlightPolishing.paragraph.2')}</StyledP>
          </StyledMarginDiv>

          <CarServiceRepairPrice
            h2={'headlightPolishing.h2'}
            list={'headlightPolishing.serviceList'}
            price={'headlightPolishing.priceList'}
            Transform={StyledTransformDiv}
          />
        </StyledFlexDesktopDivHeadlight>
      </StyledContainer>
    </section>
  );
};
