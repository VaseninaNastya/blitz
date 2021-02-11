import React from "react";
import s from "./Menu.module.css";
import classNames from 'classnames';
const Menu = ({ fonts, mobileMenu }) => {
  const classes = fonts ? classNames(s.item, s.item_font__typical) : classNames(s.item, s.item_font__special);
  const mobileMenuClasses = mobileMenu ? s.mobileMenu : s.mobileMenu_hidden
  return (
    <>
      <ul className={s.header_menu}>
        <li><a className={classes} href="#">Home</a></li>
        <li><a className={classes} href="#">About Me</a></li>
        <li><a className={classes} href="#">Portfolio</a></li>
        <li><a className={classes} href="#">Contact</a></li>
      </ul>
      <div className={mobileMenuClasses} >∞ MENU</div>
    </>
  );
};

export default Menu;
