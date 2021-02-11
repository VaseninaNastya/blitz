import React from "react";
import s from "./Header.module.css";
import classNames from "classnames";

const Header = ({ children, colorTheme }) => {
  const classes = colorTheme
    ? classNames(s.underline, s.underline__white)
    : classNames(s.underline, s.underline_gray);
  return (
    <>
      <div className={s.header}>
        <div className={classes}>{children}</div>
      </div>
    </>
  );
};

export default Header;
