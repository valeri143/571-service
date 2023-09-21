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

const CarServiceChassisRepairPrice = () => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledContainer style={{ paddingBottom: 0 }}>
        <StyledH2>{t('chassisRepair.h2')}</StyledH2>
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
            <ServiceCell>{t('chassisRepair.priceList.0')}</ServiceCell>
            <PriceCell>
              {' '}
              {t('engineRepair.priceTitles.2')}
              <StyledPriceSpan> 550 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('chassisRepair.priceList.1')}</ServiceCell>
            <PriceCell>
              {' '}
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 95 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('chassisRepair.priceList.2')}</ServiceCell>
            <PriceCell>
              {' '}
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 650 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('chassisRepair.priceList.3')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 380 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('chassisRepair.priceList.4')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 400 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('chassisRepair.priceList.5')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 550 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('chassisRepair.priceList.6')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 450 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('chassisRepair.priceList.7')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 500 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('chassisRepair.priceList.8')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 950 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('chassisRepair.priceList.9')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 120 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('chassisRepair.priceList.10')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 240 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('chassisRepair.priceList.11')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 450 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('chassisRepair.priceList.12')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 250 грн</StyledPriceSpan>
            </PriceCell>
          </StyledTr>
          <tr>
            <ServiceCell>{t('chassisRepair.priceList.13')}</ServiceCell>
            <PriceCell>
              {t('engineRepair.priceTitles.2')}{' '}
              <StyledPriceSpan> 550 грн</StyledPriceSpan>
            </PriceCell>
          </tr>
          <StyledTr>
            <ServiceCell>{t('chassisRepair.priceList.14')}</ServiceCell>
            <PriceCell>{t('engineRepair.priceTitles.3')} </PriceCell>
          </StyledTr>
        </tbody>
      </StyledTable>
    </section>
  );
};
export default CarServiceChassisRepairPrice;
