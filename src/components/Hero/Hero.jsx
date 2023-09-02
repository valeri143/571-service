import { NavLink } from 'react-router-dom';

export const Hero = () => {
  return (
    <div>
      <ul>
        <li>
          <div>
            <NavLink to={'/ua/contacts'}>HomePage</NavLink>
          </div>
        </li>
        <li>
          <div></div>
        </li>
        <li>
          <div></div>
        </li>
      </ul>
    </div>
  );
};
