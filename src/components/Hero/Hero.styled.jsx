import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 50px 15px 80px 15px;
  margin: 0 auto;
  box-sizing: border-box;
  outline: solid tomato;
  position: relative;
  text-align: left;
  @media screen and (min-width: 390px) {
    width: 390px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1512px) {
    width: 1512px;
    padding: 100px 156px 150px 156px;
  }
`;

export const StyledH1 = styled.h1`
  width: 300px;
  color: var(--light-color);
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 10px;
  margin-top: 60px;
`;

export const StyledSpan = styled.span`
  color: var(--accent-color);
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const StyledP = styled.p`
  width: 360px;
  font-size: 16px;
  color: var(--light-color);
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const StyledAnimationUl = styled.ul`
  margin-top: 50px;
  position: relative;
`;

export const StyledAnimationDiv01 = styled.div`
  position: absolute;
  left: 56px;
  display: inline-flex;
  transform: rotate(-4.023deg);
  padding: 11px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 500px;
  border: 1px solid var(--accent-color);
  background: rgba(255, 255, 255, 0.1);
`;

export const StyledAnimationDiv02 = styled.div`
  position: absolute;
  top: 25px;
  right: 10px;
  display: inline-flex;
  padding: 11px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 500px;
  border: 1px solid var(--accent-color);
  background: rgba(255, 255, 255, 0.1);
`;

export const StyledAnimationDiv03 = styled.div`
  position: absolute;
  top: 85px;
  display: inline-flex;
  transform: rotate(8.017deg);
  padding: 11px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 500px;
  border: 1px solid var(--accent-color);
  background: rgba(255, 255, 255, 0.1);
`;

export const StyledAnimationP = styled.p`
  color: var(--light-color);
  line-height: 1.5;
`;

export const StyledImg = styled.img`
  position: absolute;
  bottom: 395px;
  right: 0;
`;

export const StyledBenefitsUl = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  margin-top: 456px;
  align-items: center;
`;
export const StyledBenefitsDiv = styled.div`
  max-width: 320px;
  display: flex;
  align-items: center;
  padding-left: 43px;
  gap: 20px;
  height: 95px;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
`;

export const StyledBenefitsDiv01 = styled.div`
  max-width: 327px;
  display: flex;
  align-items: center;
  padding-left: 35px;
  gap: 20px;
  height: 95px;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
`;
export const StyledBenefitsDiv02 = styled.div`
  max-width: 302px;
  display: flex;
  align-items: center;
  padding-left: 59px;
  justify-content: center;
  gap: 20px;
  height: 95px;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
`;

export const StyledNumP = styled.p`
  color: var(--accent-color);
  font-size: 40px;
  line-height: 1.2;
  text-transform: uppercase;
  @media screen and (min-width: 360px) {
    margin-right: 35px;
  }
`;
export const StyledNumP01 = styled.p`
  color: var(--accent-color);
  font-size: 40px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const StyledBenefitsP = styled.p`
  line-height: 1.5;
  max-width: 165px;
`;

export const StyledLineDiv = styled.div`
  width: 2px;
  height: 60px;
  background-color: var(--grey-color);
`;
