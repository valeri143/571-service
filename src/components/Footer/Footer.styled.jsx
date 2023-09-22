import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: var(--primary-color);
`;

export const StyledFlexBoxDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: 30px;
  flex-basis: calc((100% - 20px) / 2);
`;

export const StyledImgDiv = styled.div`
  margin-bottom: 20px;
`;

export const StyledPhoneP = styled.p`
  color: var(--accent-color);
`;

export const StyledNumberDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledP = styled.p`
  color: var(--grey-color);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  opacity: 0.8;
`;

export const StyledSpan = styled.span`
  color: var(--light-color);
  font-size: 16px;
  line-height: 1.5;
`;

export const StyledTimeDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
`;

export const StyledContactsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledH5 = styled.h5`
  color: var(--light-color);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const StyledItemP = styled.p`
  color: var(--grey-color);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  opacity: 0.8;
`;

export const StyledNavLinksListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 174px;
`;

export const StyledFooterLineDiv = styled.div`
  position: absolute;
  left: 0;
  max-width: 390px;
  height: 1px;
  opacity: 0.5;
  background: #dadada;
  margin-top: 40px;
  margin-bottom: 30px;
  @media screen and (min-width: 390px) {
    width: 390px;
  }
`;

export const StyledConfidenceP = styled.p`
  color: var(--grey-color);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  margin-top: 70px;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledRightsP = styled.p`
  color: var(--grey-color);
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  opacity: 0.5;
`;
