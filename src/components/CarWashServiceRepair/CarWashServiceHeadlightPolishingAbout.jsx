import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledP,
  StyledContainer,
  StyledMarginDiv,
  StyledFlexDesktopDiv,
} from '../CarServiceRepair/CarServiceRepair.styled';
import { CarServiceRepairForm } from '../CarServiceRepair/CarServiceRepairForm';

const CarServiceRepairPrice = lazy(() =>
  import('components/CarServiceRepair/CarServiceRepairPrice')
);

export const CarWashServiceHeadlightPolishingAbout = () => {
  const { t } = useTranslation();

  return (
    <section>
      <StyledContainer>
        <StyledFlexDesktopDiv>
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
          />
        </StyledFlexDesktopDiv>
      </StyledContainer>
    </section>
  );
};
