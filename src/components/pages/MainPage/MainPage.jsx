import React from "react";
import style from "./MainPage.module.scss";
import avatar from "../../../assets/images/avatar-logo.png";
import arrowR from "../../../assets/images/arrowRight.gif";
import arrowL from "../../../assets/images/arrowLeft.gif";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const MainPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={style.main}>
        <div className={`${style.main__wrapper} ${style.container}`}>
          <h1 className={style.main__title}>
            <span>Hello</span>, you went into my resume, let's get acquainted! My name is Alexey Boldyrev and I am a <span>frontend developer</span>.
          </h1>
          <div className={style.main__image}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>

        <div className={style.main__view}>
          <div className={style.main__arrowR}>
            <img src={arrowR} alt="arrow-right" />
          </div>
          <NavLink to={"/projects"} className={style.main__viewprojects}>
            <span className={style.main__projects}>VIEW PROJECTS</span>
          </NavLink>
          <div className={style.main__arrowL}>
            <img src={arrowL} alt="arrow-left" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
