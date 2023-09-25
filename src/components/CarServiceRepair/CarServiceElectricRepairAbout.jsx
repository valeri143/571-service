import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  StyledP,
  StyledSpan,
  StyledFlexDesktopDiv,
  StyledMarginDivExtra,
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
    transform: translateY(-55%);
  }
`;
export const CarServiceElectricRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDivExtra>
            <StyledP>{t('electricRepair.paragraph.0')}</StyledP>
            <StyledP>
              {t('electricRepair.paragraph.1')}{' '}
              <StyledSpan>{t('electricRepair.paragraph.2')}</StyledSpan>
              {t('electricRepair.paragraph.3')}
            </StyledP>
            <StyledP>
              {t('electricRepair.paragraph.4')}
              <StyledSpan> {t('electricRepair.paragraph.5')}</StyledSpan>
              {t('electricRepair.paragraph.6')}
            </StyledP>
            <StyledP>
              {t('electricRepair.paragraph.7')}
              <StyledSpan> {t('electricRepair.paragraph.8')}</StyledSpan>
              {t('electricRepair.paragraph.9')}
            </StyledP>
          </StyledMarginDivExtra>

          <CarServiceRepairPrice
            h2={'electricRepair.h2'}
            list={'electricRepair.serviceList'}
            price={'electricRepair.priceList'}
            Transform={StyledTransformCleaning}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
