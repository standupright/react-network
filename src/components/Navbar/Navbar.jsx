import React from 'react';
import NavbarStyles from './Navbar.module.css'

console.log(NavbarStyles)

const Navbar = () => {
    return (
      <nav className={NavbarStyles.nav}>
         <ul className={NavbarStyles.nav__list}>
             <li className={NavbarStyles.nav__item}>
                 <a className={NavbarStyles.nav__link} href="#">Profile</a>
             </li>
             <li className={NavbarStyles.nav__item}>
                 <a className={NavbarStyles.nav__link} href="#">Projects</a>
             </li>
             <li className={NavbarStyles.nav__item}>
                 <a className={NavbarStyles.nav__link} href="">Reviews</a>
             </li>
         </ul>
      </nav>
    );
  }
  
  export default Navbar;