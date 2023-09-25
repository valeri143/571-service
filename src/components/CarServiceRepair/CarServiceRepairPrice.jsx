import { useTranslation } from 'react-i18next';
import {
  PriceCell,
  PriceHeader,
  ServiceCell,
  ServiceHeader,
  StyledDivTable,
  StyledH2,
  StyledPriceSpan,
  StyledTable,
  StyledTr,
} from './CarServiceRepair.styled';

const CarServiceRepairPrice = ({ h2, list, price }) => {
  const { t } = useTranslation();
  const priceFrom = t('engineRepair.priceTitles.2');
  const serviceList = t(`${list}`, { returnObjects: true });
  const priceList = t(`${price}`, { returnObjects: true });
  return (
    <StyledDivTable>
      <StyledH2>{t(h2)}</StyledH2>
      <StyledTable>
        <thead>
          <tr>
            <ServiceHeader>{t('engineRepair.priceTitles.0')}</ServiceHeader>
            <PriceHeader>{t('engineRepair.priceTitles.1')}</PriceHeader>
          </tr>
        </thead>
        <tbody>
          {serviceList.map((item, index) =>
            index % 2 === 0 ? (
              <StyledTr key={index}>
                <ServiceCell>{item}</ServiceCell>
                {priceList[index] === 'уточнюйте' ||
                priceList[index] === 'уточняйте' ? (
                  <PriceCell>{priceList[index]}</PriceCell>
                ) : priceList[index] === '' ? (
                  <PriceCell></PriceCell>
                ) : (
                  <PriceCell>
                    {priceFrom}{' '}
                    <StyledPriceSpan>{priceList[index]}</StyledPriceSpan>
                  </PriceCell>
                )}
              </StyledTr>
            ) : (
              <tr key={index}>
                <ServiceCell>{item}</ServiceCell>
                {priceList[index] === 'уточнюйте' ||
                priceList[index] === 'уточняйте' ? (
                  <PriceCell>{priceList[index]}</PriceCell>
                ) : priceList[index] === '' ? (
                  <PriceCell></PriceCell>
                ) : (
                  <PriceCell>
                    {priceFrom}{' '}
                    <StyledPriceSpan>{priceList[index]}</StyledPriceSpan>
                  </PriceCell>
                )}
              </tr>
            )
          )}
        </tbody>
      </StyledTable>
    </StyledDivTable>
  );
};

export default CarServiceRepairPrice;
