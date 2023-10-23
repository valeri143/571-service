import styled from 'styled-components';

export const StyledH3 = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const StyledTrHeaders = styled.tr`
  margin-bottom: 30px;
`;

export const StyledTh = styled.th`
  text-align: center;
  color: #222;
  font-weight: 400;
  line-height: 1.7;
`;
export const PriceTd = styled.td`
  padding-right: 10px;
  padding-top: 17px;
  padding-bottom: 17px;
  text-align: center;
  color: #222;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.7;
`;
export const ServiceCell = styled.td`
  padding-left: 15px;
  padding-top: 17px;
  padding-bottom: 17px;
  text-align: left;
  color: #222;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.1;
`;

export const ServiceCellTire = styled.td`
  padding-left: 14px;
  padding-top: 17px;
  padding-bottom: 17px;
  text-align: left;
  height: 27px;
  color: #222;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.1;
`;

export const StyledTableTire = styled.table`
  width: 100%;
`;

export const StyledTransformDiv = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: -120px;
  }
`;

export const StyledOl = styled.ol`
  @media screen and (min-width: 768px) and (max-width: 1511px) {
    max-width: 350px;
  }
`;

export const StyledSpanTire = styled.span`
  font-weight: 700;
  @media screen and (min-width: 768px) and (max-width: 1511px) {
    display: block;
    max-width: 300px;
  }
`;
