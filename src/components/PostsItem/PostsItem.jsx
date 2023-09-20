import {
  StyledPostDateP,
  StyledPostDiv,
  StyledPostText,
  StyledPostTitle,
} from './PostsItem.styled';

export const PostsItem = ({ post01x, post02x, date, title, text }) => {
  return (
    <StyledPostDiv>
      <img
        srcSet={`${post01x} 1x, ${post02x} 2x`}
        src={post01x}
        alt="post-img"
        loading="lazy"
        width={387}
        height={230}
      />
      <StyledPostDateP>{date}</StyledPostDateP>
      <StyledPostTitle>{title}</StyledPostTitle>
      <StyledPostText>{text}</StyledPostText>
    </StyledPostDiv>
  );
};
