import styled from 'styled-components';

export const StyledPostLink = styled.a`
  max-width: 360px;
  height: 407px;
  border-radius: 8px;
  background: var(--light-color);
  box-shadow: 0px 0px 60px 0px rgba(129, 129, 129, 0.15);
  padding-bottom: 16px;
  margin-bottom: 30px;
  cursor: pointer;
  @media screen and (min-width: 1512px) {
    width: 387px;
    height: 425px;
    transition: box-shadow 250ms var(--animation-cubic);
    &:hover,
    &:focus {
      box-shadow: 20px 20px 30px 0px rgba(129, 129, 129, 0.4);
    }
  }
`;

export const StyledPostDateP = styled.p`
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;
  opacity: 0.5;
  margin-top: 16px;
  margin-bottom: 7px;
  margin-left: 16px;
`;

export const StyledPostTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 10px;
  margin-left: 16px;
`;

export const StyledPostText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  opacity: 0.5;
  margin-left: 16px;
`;

export const StyledNewPost = styled.div`
  display: none;
  @media screen and (min-width: 1512px) {
    display: block;
  }
`;
export const StyledNewPostMobile = styled.div`
  @media screen and (min-width: 1512px) {
    display: none;
  }
`;
