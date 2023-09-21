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
} from './CarServiceEngineRepair.styled';

const CarServiceEngineRepairPrice = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer style={{ paddingBottom: 0 }}>
        <StyledH2>{t('engineRepair.h2')}</StyledH2>
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
            <ServiceCell>{t('engineRepair.priceList.0')}</ServiceCell>
            <PriceCell>
              {' '}
              {t('engineRepair.priceTitles.2')}
              <StyledPriceSpan> 250 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('engineRepair.priceList.1')}</ServiceCell>
            <PriceCell>
              {' '}
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 250 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('engineRepair.priceList.2')}</ServiceCell>
            <PriceCell>
              {' '}
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 1200 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('engineRepair.priceList.3')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 2500 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('engineRepair.priceList.4')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 3500 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('engineRepair.priceList.5')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 2500 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('engineRepair.priceList.6')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 450 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('engineRepair.priceList.7')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 395 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('engineRepair.priceList.8')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 450 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('engineRepair.priceList.9')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 350 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('engineRepair.priceList.10')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 100 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('engineRepair.priceList.11')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 7500 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('engineRepair.priceList.12')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 1000 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('engineRepair.priceList.13')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 850 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('engineRepair.priceList.14')}</ServiceCell>
            <PriceCell></PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('engineRepair.priceList.15')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 1000 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('engineRepair.priceList.16')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 75 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
        </tbody>
      </StyledTable>
    </section>
  );
};

export default CarServiceEngineRepairPrice;
