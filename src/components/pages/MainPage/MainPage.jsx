import React from "react";
import style from "./MainPage.module.scss";
import avatar from "../../../assets/images/avatar-logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const MainPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={style.main}>
        <div className={`${style.main__wrapper} ${style.container}`}>
          <h1 className={style.main__title}>
            <span>Привет</span>, вы зашли в моё резюме, давайте познакомимся! Меня зовут Болдырев Алексей и я frontend разработчик.
          </h1>
          <div className={style.main__image}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>

        <div className={style.main__view}>
          <NavLink to={"/projects"} className={style.main__viewprojects}>
            Посмотреть мои работы можно здесь <span className={style.main__projects}> PROJECTS</span>
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};
