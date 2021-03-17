import React from 'react';
import NavbarStyles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

console.log (NavbarStyles);

const Navbar = () => {
  return (
    <nav className={NavbarStyles.nav}>
      <ul className={NavbarStyles.nav__list}>
        <li className={NavbarStyles.nav__item}>
          <NavLink to="/profile" className={NavbarStyles.nav__link} href="#">
            Профиль
          </NavLink>
        </li>
        <li className={NavbarStyles.nav__item}>
          <NavLink to="/projects" className={NavbarStyles.nav__link} href="#">
            Проекты
          </NavLink>
        </li>
        <li className={NavbarStyles.nav__item}>
          <NavLink to="/reviews" className={NavbarStyles.nav__link} href="">
            Отзывы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
