import styled from 'styled-components';

export const StyledFeedbackDiv = styled.div`
  max-width: 360px;
  height: 305px;
  padding: 16px;
  position: relative;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
  margin-bottom: 30px;
`;

export const StyledFeedbackBracketsSvg = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const StyledFeedbackH4 = styled.h4`
  width: 301px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 10px;
`;

export const StyledFeedbackP = styled.p`
  font-family: Ubuntu;
  font-size: 16px;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const StyledFeedbackFlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 67px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 0px 0px 8px 8px;
  background: rgba(253, 199, 13, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const StyledFeedbackFlexBoxDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const StyledFeedbackFlexP = styled.p`
  font-weight: 300;
  line-height: 1.5;
`;
