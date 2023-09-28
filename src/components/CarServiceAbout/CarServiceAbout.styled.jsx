import styled from 'styled-components';

export const StyledCarServiceUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const StyledCarServiceDiv = styled.div`
  position: relative;
  max-width: 360px;
  max-height: 326px;
  padding-bottom: 20px;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
  @media screen and (min-width: 1512px) {
    cursor: pointer;
    overflow: hidden;
    max-width: none;
    width: 387px;
    height: 325px;
    background: var(--background-color);
    box-shadow: none;
    transition: background 250ms ease-in-out, box-shadow 250ms ease-in-out;
    &:hover,
    &:focus {
      background: var(--light-color);
      box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
    }
  }
`;

export const StyledCarServiceH4 = styled.h4`
  margin-left: 16px;
  margin-top: 20px;
  font-weight: 500;
  line-height: 1.2;
  width: 246px;
  @media screen and (min-width: 1512px) {
    text-align: center;

    font-size: 18px;
    font-weight: 400;
    margin-left: auto;
    margin-right: auto;
    transform: translate(0px, 0px);

    transition: all 250ms ease-in-out;
    ${StyledCarServiceDiv}:hover &, ${StyledCarServiceDiv}:focus & {
      transform: translate(-66px, 21px);
      font-weight: 500;
      font-size: 24px;
    }
  }
`;
export const StyledCarServiceH4Less = styled.h4`
  margin-left: 16px;
  margin-top: 20px;
  font-weight: 500;
  line-height: 1.2;
  width: 246px;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
    font-weight: 400;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    transform: translate(0px, 0px);

    transition: all 250ms ease-in-out;
    ${StyledCarServiceDiv}:hover &, ${StyledCarServiceDiv}:focus & {
      transform: translate(-86px, 21px);
      font-weight: 500;
      font-size: 24px;
    }
  }
`;

export const StyledCarServiceH4More = styled.h4`
  margin-left: 16px;
  margin-top: 20px;
  font-weight: 500;
  line-height: 1.2;
  width: 246px;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
    font-weight: 400;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    transform: translate(0px, 0px);
    text-align: center;
    width: 279px;
    transition: all 250ms ease-in-out;
    ${StyledCarServiceDiv}:hover &, ${StyledCarServiceDiv}:focus & {
      transform: translate(-20px, 10px);
      font-weight: 500;
      font-size: 24px;
      text-align: left;
      width: 317px;
    }
  }
`;

export const StyledCarServiceH4MoreTire = styled.h4`
  margin-left: 16px;
  margin-top: 20px;
  font-weight: 500;
  line-height: 1.2;
  width: 246px;
  @media screen and (min-width: 1512px) {
    font-size: 18px;
    font-weight: 400;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    transform: translate(0px, 0px);
    text-align: center;
    width: 283px;
    transition: all 250ms ease-in-out;
    ${StyledCarServiceDiv}:hover &, ${StyledCarServiceDiv}:focus & {
      transform: translate(-30px, 10px);
      font-weight: 500;
      font-size: 24px;
      text-align: left;
      width: 286px;
    }
  }
`;

export const StyledCarServiceButton = styled.button`
  position: absolute;
  bottom: 14px;
  right: 16px;
  @media screen and (min-width: 1512px) {
    bottom: 20px;
    opacity: 0;
    transition: opacity 250ms ease-in-out;
    ${StyledCarServiceDiv}:hover &, ${StyledCarServiceDiv}:focus & {
      opacity: 1;
    }
  }
`;

export const StyledAnimationImg = styled.img`
  @media screen and (min-width: 1512px) {
    width: 100%;
    transition: scale 250ms ease-in-out;
    ${StyledCarServiceDiv}:hover &, ${StyledCarServiceDiv}:focus & {
      scale: 1.1;
    }
  }
`;

export const StyledDesktopP = styled.p`
  display: none;
  @media screen and (min-width: 1512px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    margin-bottom: 60px;
    max-width: 795px;
    text-align: center;
    line-height: 1.5;
    opacity: 0.5;
  }
`;

export const StyledDesktopSpan = styled.span`
  @media screen and (min-width: 1512px) {
    color: var(--accent-color);
  }
`;

export const StyledDesktopTextDiv = styled.div`
  display: none;
  @media screen and (min-width: 1512px) {
    padding: 36px 202px;
    display: block;
    text-align: center;
    max-width: 1200px;
    max-height: 126px;
    border-radius: 8px;
    background: var(--light-color);
    line-height: 1.5;
  }
`;
