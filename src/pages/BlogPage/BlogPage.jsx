import { StyledContainer } from 'components/Hero/Hero.styled';
import { useNavigate } from 'react-router-dom';
import {
  StyledNewPost,
  StyledNewPostMobile,
  StyledPostDateP,
  StyledPostLink,
  StyledPostText,
  StyledPostTitle,
} from 'components/PostsItem/PostsItem.styled';
import {
  StyledH3,
  StyledCircleDiv,
  StyledDiv,
  StyledH2,
} from 'components/SectionAbout/SectionAbout.styled';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyledBlogUl,
  StyledButton,
  StyledNewDiv,
  StyledSpan,
} from '../FeedbacksPage/FeedbacksPage.styled';
import { PostsItem } from 'components/PostsItem/PostsItem';
import newPost from '../../images/desktop/blog-new.png';
import post0101x from '../../images/posts/post01@1x-min.jpg';
import post0102x from '../../images/posts/post01@2x-min.jpg';
import post0201x from '../../images/posts/post02@1x-min.jpg';
import post0202x from '../../images/posts/post02@2x-min.jpg';
import post0301x from '../../images/posts/post03@1x-min.jpg';
import post0302x from '../../images/posts/post03@2x-min.jpg';

const SectionContacts = lazy(() =>
  import('components/SectionContacts/SectionContacts')
);

const BlogPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
              <StyledNewPost>
                <StyledPostLink
                  style={{ maxWidth: 'none', width: 794, height: 'auto' }}
                  onClick={() => navigate('modern-car-service')}
                >
                  <picture>
                    <source
                      media="(min-width: 1512px)"
                      srcSet={`${newPost} 1x, ${newPost} 2x`}
                      width={794}
                    />
                    <img
                      srcSet={`${post0101x} 1x, ${post0102x} 2x`}
                      src={post0101x}
                      alt="post-img"
                      sizes="(max-width: 1512px) 100vw, 387px"
                      loading="lazy"
                      height={230}
                    />
                  </picture>
                  <StyledPostDateP>10.06.2023</StyledPostDateP>
                  <StyledPostTitle>{t('blog.posts.0.0')}</StyledPostTitle>
                  <StyledPostText style={{ maxWidth: 550 }}>
                    {t('blog.posts.0.1')}
                  </StyledPostText>
                </StyledPostLink>
              </StyledNewPost>
              <StyledNewPostMobile>
                <PostsItem
                  post01x={post0101x}
                  post02x={post0102x}
                  date="10.06.2023"
                  title={t('blog.posts.0.0')}
                  text={t('blog.posts.0.1')}
                />
              </StyledNewPostMobile>
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
