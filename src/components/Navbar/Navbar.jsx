import React from 'react';
import NavbarStyles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

console.log (NavbarStyles);

const Navbar = () => {
  return (
    <nav className={NavbarStyles.nav}>
      <ul className={NavbarStyles.nav__list}>
        <li className={NavbarStyles.nav__item}>
          <NavLink to="/profile" className={NavbarStyles.nav__link}>
            Профиль
          </NavLink>
        </li>
        <li className={NavbarStyles.nav__item}>
          <NavLink to="/projects" className={NavbarStyles.nav__link}>
            Проекты
          </NavLink>
        </li>
        <li className={NavbarStyles.nav__item}>
          <NavLink to="/reviews" className={NavbarStyles.nav__link}>
            Отзывы
          </NavLink>
        </li>
        <li className={NavbarStyles.nav__item}>
          <NavLink to="/messages" className={NavbarStyles.nav__link}>
            Сообщения
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
