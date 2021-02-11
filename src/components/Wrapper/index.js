import s from './Wrapper.module.css'
import React from "react";
import classNames from 'classnames';
const Wrapper = ({colorTheme, children}) => {
    const classes = colorTheme? classNames(s.wrapper, s.wrapper__white):classNames(s.wrapper, s.wrapper__gray);
    return (
        <div className = {classes}>
                {children}
        </div>
    )
  }
export default  Wrapper