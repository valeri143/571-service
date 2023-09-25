import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledSpan,
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
