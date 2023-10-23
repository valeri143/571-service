import { useTranslation } from 'react-i18next';
import {
  StyledH2,
  StyledTable,
  StyledTr,
} from '../CarServiceRepair/CarServiceRepair.styled';
import {
  PriceTd,
  StyledTh,
  StyledTrHeaders,
  StyledTransformDiv,
  StyledTableTire,
  StyledH3,
  ServiceCellTire,
} from './CarTireServiceRepair.styled';

const CarTireServiceRepairPrice = () => {
  const { t } = useTranslation();

  return (
    <StyledTransformDiv>
      <StyledH2 style={{ marginLeft: 0 }}>
        {t('mountingDismantlingOfTires.h2')}
      </StyledH2>
      <StyledH3>{t('mountingDismantlingOfTires.tiresList.0')}</StyledH3>
      <StyledTable style={{ margin: 0 }}>
        <thead>
          <StyledTrHeaders>
            <StyledTh></StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.3')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.4')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.5')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.6')}</StyledTh>
          </StyledTrHeaders>
        </thead>
        <tbody>
          <tr>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <ServiceCellTire>R13</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R14</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R15</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R16</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R17</ServiceCellTire>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>25 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>30 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>30 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>35 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>40 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>25 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>30 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>35 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>35 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>40 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>30 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>30 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>35 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>40 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>40 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>320 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>360 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>400 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>440 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>480 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledH3>{t('mountingDismantlingOfTires.tiresList.1')}</StyledH3>
      <StyledTable style={{ margin: 0 }}>
        <thead>
          <StyledTrHeaders>
            <StyledTh></StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.3')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.4')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.5')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.6')}</StyledTh>
          </StyledTrHeaders>
        </thead>
        <tbody>
          <tr>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <ServiceCellTire>R13/14</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R15</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R16</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R17</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R18</ServiceCellTire>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>25 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>30 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>40 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>45 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>30 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>40 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>45 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>35 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>40 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>45 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>360 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>440 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>520 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>580 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>600 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledH3>{t('mountingDismantlingOfTires.tiresList.2')}</StyledH3>
      <StyledTable style={{ margin: 0 }}>
        <thead>
          <StyledTrHeaders>
            <StyledTh></StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.3')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.4')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.5')}</StyledTh>
            <StyledTh>{t('mountingDismantlingOfTires.tiresList.6')}</StyledTh>
          </StyledTrHeaders>
        </thead>
        <tbody>
          <tr>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <ServiceCellTire>R15(ж)</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R15(л)</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R16(ж)</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R16(л)</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R17(ж)</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R17(л)</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R18(ж)</ServiceCellTire>
                </StyledTr>
                <StyledTr>
                  <ServiceCellTire>R18(л)</ServiceCellTire>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>55 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>55 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>60 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>60 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>45 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>55 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>55 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>55 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>60 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>60 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>45 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>50 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>55 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>55 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>55 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>60 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>60 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>65 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
            <td>
              <StyledTableTire>
                <StyledTr>
                  <PriceTd>560 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>600 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>620 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>640 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>660 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>680 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>720 грн</PriceTd>
                </StyledTr>
                <StyledTr>
                  <PriceTd>740 грн</PriceTd>
                </StyledTr>
              </StyledTableTire>
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledTransformDiv>
  );
};

export default CarTireServiceRepairPrice;
