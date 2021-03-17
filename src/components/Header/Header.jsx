import React from 'react';
import HeaderStyles from './Header.module.css'

const Header = () => {
    return (
      <header className={HeaderStyles.header}>
          <div className={HeaderStyles.header__wrapper}>
            <div className={HeaderStyles.header__logo}>
                <img src="/img/logo.png" alt="Логотип сайта GG"/>
            </div>
            <h1 className={HeaderStyles.header__title}> Портфолио молодого человека</h1>
          </div>
      </header>
    );
  }
  
  export default Header;