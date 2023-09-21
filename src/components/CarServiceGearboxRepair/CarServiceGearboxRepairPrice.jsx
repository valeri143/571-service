import { useTranslation } from 'react-i18next';
import {
  PriceCell,
  PriceHeader,
  ServiceCell,
  ServiceHeader,
  StyledContainer,
  StyledH2,
  StyledPriceSpan,
  StyledTable,
  StyledTr,
} from '../CarServiceEngineRepair/CarServiceEngineRepair.styled';

const CarServiceGearboxRepairPrice = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer style={{ paddingBottom: 0 }}>
        <StyledH2>{t('gearboxRepair.h2')}</StyledH2>
      </StyledContainer>
      <StyledTable>
        <thead>
          <tr>
            <ServiceHeader>Услуга</ServiceHeader>
            <PriceHeader>Стоимость</PriceHeader>
          </tr>
        </thead>
        <tbody>
          <StyledTr>
            <ServiceCell>{t('gearboxRepair.priceList.0')}</ServiceCell>
            <PriceCell>
              {' '}
              {t('engineRepair.priceTitles.2')}
              <StyledPriceSpan> 350 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('gearboxRepair.priceList.1')}</ServiceCell>
            <PriceCell>
              {' '}
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 850 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('gearboxRepair.priceList.2')}</ServiceCell>
            <PriceCell>
              {' '}
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 1800 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('gearboxRepair.priceList.3')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 2200 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
        </tbody>
      </StyledTable>
    </section>
  );
};
export default CarServiceGearboxRepairPrice;
