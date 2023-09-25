import { useTranslation } from 'react-i18next';
import React from 'react';
import {
  PriceCell,
  PriceHeader,
  ServiceCell,
  ServiceHeader,
  StyledH2,
  StyledPriceSpan,
  StyledTable,
  StyledTr,
} from '../CarServiceRepair/CarServiceRepair.styled';

const CarTireServiceTiresRepairPrice = ({ h2, list, price, Transform }) => {
  const { t } = useTranslation();
  const serviceList = t(`${list}`, { returnObjects: true });
  const priceList = t(`${price}`, { returnObjects: true });
  const priceFrom = t('engineRepair.priceTitles.2');

  return (
    <Transform>
      <StyledH2 style={{ marginLeft: 5 }}>{t(h2)}</StyledH2>
      <StyledTable>
        <thead>
          <tr>
            <ServiceHeader>{t('engineRepair.priceTitles.0')}</ServiceHeader>
            <PriceHeader>{t('engineRepair.priceTitles.1')}</PriceHeader>
          </tr>
        </thead>
        <tbody>
          {serviceList.map((item, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 ? (
                <StyledTr>
                  {item === 'Легковые авто' ||
                  item === 'Внедорожники, микроавтобусы, кроссоверы' ||
                  item === 'Позашляховики, мікроавтобуси, кросовери' ||
                  item === 'Легкові автомобілі' ? (
                    <StyledPriceSpan
                      style={{
                        paddingLeft: 15,
                        display: 'table-cell',
                      }}
                    >
                      {item}
                    </StyledPriceSpan>
                  ) : (
                    <ServiceCell>{item}</ServiceCell>
                  )}

                  <PriceCell>
                    {priceList[index] === '480 грн' ? (
                      <>
                        {priceFrom}{' '}
                        <StyledPriceSpan>{priceList[index]}</StyledPriceSpan>
                      </>
                    ) : (
                      <StyledPriceSpan>{priceList[index]}</StyledPriceSpan>
                    )}
                  </PriceCell>
                </StyledTr>
              ) : (
                <tr key={index}>
                  <ServiceCell>{item}</ServiceCell>
                  <PriceCell>
                    <StyledPriceSpan>{priceList[index]}</StyledPriceSpan>
                  </PriceCell>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </StyledTable>
    </Transform>
  );
};

export default CarTireServiceTiresRepairPrice;
