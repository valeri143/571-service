import { useTranslation } from 'react-i18next';
import {
  StyledContainer,
  StyledH2,
  StyledTable,
  StyledTr,
} from '../CarServiceRepair/CarServiceRepair.styled';
import {
  PriceTd,
  StyledTh,
  StyledTrHeaders,
  ServiceCell,
} from './CarTireServiceRepair.styled';

const CarTireServiceRepairPrice = () => {
  const { t } = useTranslation();

  return (
    <section>
      <StyledContainer style={{ paddingBottom: 0 }}>
        <StyledH2>{t('mountingDismantlingOfTires.h2')}</StyledH2>
      </StyledContainer>
      <StyledTable>
        <thead>
          <StyledTrHeaders>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.0')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.1')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.2')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.3')}</StyledTh>
          </StyledTrHeaders>
        </thead>
        <tbody>
          <StyledTr>
            <ServiceCell>R13</ServiceCell>
            <PriceTd>500 грн</PriceTd>
            <PriceTd>500 грн</PriceTd>
            <PriceTd>-</PriceTd>
          </StyledTr>
          <tr>
            <ServiceCell>R14</ServiceCell>
            <PriceTd>600 грн</PriceTd>
            <PriceTd>600 грн</PriceTd>
            <PriceTd>-</PriceTd>
          </tr>
          <StyledTr>
            <ServiceCell>R15</ServiceCell>
            <PriceTd>650 грн</PriceTd>
            <PriceTd>700 грн</PriceTd>
            <PriceTd>800 грн</PriceTd>
          </StyledTr>
          <tr>
            <ServiceCell>R16</ServiceCell>
            <PriceTd>700 грн</PriceTd>
            <PriceTd>800 грн</PriceTd>
            <PriceTd>900 грн</PriceTd>
          </tr>
          <StyledTr>
            <ServiceCell>R17</ServiceCell>
            <PriceTd>750 грн</PriceTd>
            <PriceTd>900 грн</PriceTd>
            <PriceTd>1000 грн</PriceTd>
          </StyledTr>
          <tr>
            <ServiceCell>R18</ServiceCell>
            <PriceTd>-</PriceTd>
            <PriceTd>1000 грн</PriceTd>
            <PriceTd>1000 грн</PriceTd>
          </tr>
          <StyledTr>
            <ServiceCell>R19</ServiceCell>
            <PriceTd>-</PriceTd>
            <PriceTd>1100 грн</PriceTd>
            <PriceTd>1300 грн</PriceTd>
          </StyledTr>
          <tr>
            <ServiceCell>R20</ServiceCell>
            <PriceTd>-</PriceTd>
            <PriceTd>1200 грн</PriceTd>
            <PriceTd>1400 грн</PriceTd>
          </tr>
          <StyledTr>
            <ServiceCell>R21</ServiceCell>
            <PriceTd>-</PriceTd>
            <PriceTd>1300 грн</PriceTd>
            <PriceTd>1500 грн</PriceTd>
          </StyledTr>
          <tr>
            <ServiceCell>R22</ServiceCell>
            <PriceTd>-</PriceTd>
            <PriceTd>1400 грн</PriceTd>
            <PriceTd>1500 грн</PriceTd>
          </tr>
          <StyledTr>
            <ServiceCell>R23</ServiceCell>
            <PriceTd>-</PriceTd>
            <PriceTd>1500 грн</PriceTd>
            <PriceTd>1600 грн</PriceTd>
          </StyledTr>
        </tbody>
      </StyledTable>
    </section>
  );
};

export default CarTireServiceRepairPrice;
