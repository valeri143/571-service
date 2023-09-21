import styled from 'styled-components';

export const StyledCarServiceUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const StyledCarServiceDiv = styled.div`
  position: relative;
  max-width: 360px;
  max-height: 326px;
  padding-bottom: 20px;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
`;

export const StyledCarServiceH4 = styled.h4`
  margin-left: 16px;
  margin-top: 20px;
  font-weight: 500;
  line-height: 1.2;
  width: 246px;
`;

export const StyledCarServiceButton = styled.button`
  position: absolute;
  bottom: 14px;
  right: 16px;
`;
