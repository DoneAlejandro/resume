import React from "react";
import style from "./Footer.module.scss";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`${style.footer__wrapper} ${style.container}`}>
        <div className={style.footer__list}>
          <a href="https://t.me/DoneAlejandro" className={style.footer__link} target="_blank" rel="noreferrer">
            <FaTelegram size={50} />
          </a>
          <a href="https://github.com/DoneAlejandro" target="_blank" className={style.footer__link} rel="noreferrer">
            <FaGithub size={50} />
          </a>
          <a href="mailto:alex-borodin88@mail.ru" className={style.footer__link}>
            <ImMail4 size={50} />
          </a>
        </div>
        <div className={style.footer__text}>©2023 DoneAlejandro</div>
      </div>
    </footer>
  );
};
