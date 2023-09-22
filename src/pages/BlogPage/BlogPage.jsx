import { StyledContainer } from 'components/Hero/Hero.styled';
import {
  StyledCircleDiv,
  StyledDiv,
  StyledH2,
} from 'components/SectionServices/SectionServices.styled';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledBlogUl,
  StyledButton,
  StyledH3,
  StyledNewDiv,
  StyledSpan,
} from '../FeedbacksPage/FeedbacksPage.styled';
import { PostsItem } from 'components/PostsItem/PostsItem';
import post0101x from '../../images/posts/post01@1x-min.jpg';
import post0102x from '../../images/posts/post01@2x-min.jpg';
import post0201x from '../../images/posts/post02@1x-min.jpg';
import post0202x from '../../images/posts/post02@2x-min.jpg';
import post0301x from '../../images/posts/post03@1x-min.jpg';
import post0302x from '../../images/posts/post03@2x-min.jpg';

const SectionContacts = lazy(() =>
  import('components//SectionContacts/SectionContacts')
);

const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <StyledContainer>
          <StyledDiv>
            <StyledCircleDiv></StyledCircleDiv>
            <StyledH2>{t('header.navLinksList.2')}</StyledH2>
          </StyledDiv>
          <StyledH3>
            {t('blog.h3.0')}
            <StyledSpan>{t('blog.h3.1')}</StyledSpan>
            {t('blog.h3.2')}
          </StyledH3>
          <StyledBlogUl>
            <li>
              <StyledNewDiv>NEW</StyledNewDiv>
              <PostsItem
                post01x={post0101x}
                post02x={post0102x}
                date="10.06.2023"
                title={t('blog.posts.0.0')}
                text={t('blog.posts.0.1')}
              />
            </li>
            <li>
              <PostsItem
                post01x={post0201x}
                post02x={post0202x}
                date="09.06.2023"
                title={t('blog.posts.1.0')}
                text={t('blog.posts.1.1')}
              />
            </li>
            <li>
              <PostsItem
                post01x={post0301x}
                post02x={post0302x}
                date="10.06.2023"
                title={t('blog.posts.2.0')}
                text={t('blog.posts.2.1')}
              />
            </li>
          </StyledBlogUl>
          <StyledButton type="button">{t('buttonTextList.1')}</StyledButton>
        </StyledContainer>
      </section>
      <SectionContacts />
    </>
  );
};
export default BlogPage;
