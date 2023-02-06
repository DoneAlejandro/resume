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
            <h1>About me</h1>
          </div>
          <div className={style.about__intro}>
            <div className={style.about__description}>
              <span>My name is Alexey Boldyrev. I am 26 years old. A year and a half ago, I decided to change my life and decided to take up programming. I started with the Python programming language. I wrote a couple of telegram bots on it. And one day I came across training videos on web programming. So I found something that I really like and something that makes me a child's delight, like when you assemble a lego set.</span>
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
