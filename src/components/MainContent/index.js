import React from "react";
import s from "./MainContent.module.css";


const MainContent = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.img}></div>
        <div className={s.description}>
          <h2 className={s.title}>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <span>Jason Wood</span>
        </div>
      </div>
    </>
  );
};

export default MainContent;
