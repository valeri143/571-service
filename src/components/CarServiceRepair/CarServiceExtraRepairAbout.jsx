import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  StyledP,
  StyledSpan,
  StyledMarginDiv,
  StyledFlexDesktopDiv,
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
    transform: translateY(-110%);
  }
`;

export const CarServiceExtraRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv style={{ marginLeft: '5px' }}>
            <StyledP>
              {t('extraRepair.paragraph.0')}{' '}
              <StyledSpan>{t('extraRepair.paragraph.1')}</StyledSpan>
              {t('extraRepair.paragraph.2')}
            </StyledP>
            <StyledP>
              {t('extraRepair.paragraph.3')}
              <StyledSpan> {t('extraRepair.paragraph.4')}</StyledSpan>
              {t('extraRepair.paragraph.5')}
            </StyledP>
            <StyledP>{t('extraRepair.paragraph.6')}</StyledP>
          </StyledMarginDiv>
          <CarServiceRepairPrice
            h2={'extraRepair.h2'}
            list={'extraRepair.serviceList'}
            price={'extraRepair.priceList'}
            Transform={StyledTransformCleaning}
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
