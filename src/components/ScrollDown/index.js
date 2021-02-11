import React from "react";
import {ReactComponent as DoubleArrow} from "./img/doubleArrow.svg";
import s from "./ScrollDown.module.css";
import classNames from 'classnames';

const ScrollDown = ({ fonts, children }) => {
  const classes = fonts ? classNames(s.scrollDown, s.scrollDown__white) : classNames(s.scrollDown, s.scrollDown__gray);
  return (
    <>
      <div className={classes}>
        <span>{children}</span>
        <DoubleArrow />
      </div>
    </>
  );
};

export default ScrollDown;
