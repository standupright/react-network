import React from 'react';
import FooterStyles from './Footer.module.css'

const Footer = () => {
    return (
      <footer className={FooterStyles.footer}>
          <div className={FooterStyles.footer__wrapper}>
            <div className={FooterStyles.footer__copyright}>
                Created by @standupright
            </div>
          </div>
      </footer>
    );
  }
  
  export default Footer;