import { useNavigate } from 'react-router-dom';

export const Header = ({ content }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <svg width="91" height="81">
          <use href=""></use>
        </svg>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#hero">{content.nav[0]}</a>
          </li>
          <li>
            <a href="#services">{content.nav[1]}</a>
          </li>
          <li>
            <a href="#feedbacks">{content.nav[2]}</a>
          </li>
          <li>
            <a href="#blog">{content.nav[3]}</a>
          </li>
          <li>
            <a href="#vacancies">{content.nav[4]}</a>
          </li>
          <li>
            <a href="#contacts">{content.nav[5]}</a>
          </li>
        </ul>
      </nav>
      <div>
        <svg width="18" height="18">
          <use href=""></use>
        </svg>
        <a href="tel:050 936 34 00">050 936 34 00</a>
        <svg width="8" height="4">
          <use href=""></use>
        </svg>
        <p>{content.tel}</p>
      </div>
      <ul>
        <li>
          <button type="button" onClick={() => navigate(content.navigateTo[0])}>
            {content.lang[0]}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => navigate(content.navigateTo[1])}>
            {content.lang[1]}
          </button>
        </li>
      </ul>
    </>
  );
};
