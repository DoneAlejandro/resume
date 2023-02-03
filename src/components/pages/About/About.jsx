import React from "react";
import style from "./About.module.scss";
import avatar from "../../../assets/images/avatar-about.png";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={style.about}>
        <div className={`${style.about__wrapper} ${style.container}`}>
          <div className={style.about__title}>
            <h1>Обо мне</h1>
          </div>
          <div className={style.about__intro}>
            <div className={style.about__description}>
              <span>Меня зовут Болдырев Алексей. Мне 26 лет. Полтора года назад я решил изменить свою жизнь и решил заняться программированием. Начинал с языка программирования Python. На нём я написал парочку ботов для телеграм. И однажды я наткнулся на обучающие ролики по веб программированию. Таким образом я нашёл то, что мне безумно нравится и то, что у меня вызывает детский восторг как когда собираешь конструктор лего</span>
            </div>
            <div className={style.about__avatar}>
              <img src={avatar} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
