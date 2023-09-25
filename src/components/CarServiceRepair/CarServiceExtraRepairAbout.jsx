import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
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

export const CarServiceExtraRepairAbout = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledPaddingContainer>
        <StyledFlexDesktopDiv>
          <CarServiceRepairForm />
          <StyledMarginDiv>
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
          />
        </StyledFlexDesktopDiv>
      </StyledPaddingContainer>
    </section>
  );
};
