import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.scss";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`${style.footer__wrapper} ${style.container}`}>
        <div className={style.footer__list}>
          <NavLink href="https://t.me/DoneAlejandro" className={style.footer__link}>
            <FaTelegram size={50} />
          </NavLink>
          <NavLink href="https://github.com/DoneAlejandro" target="blank" className={style.footer__link}>
            <FaGithub size={50} />
          </NavLink>
          <NavLink href="mailto:alex-borodin88@mail.ru" className={style.footer__link}>
            <ImMail4 size={50} />
          </NavLink>
        </div>
        <div className={style.footer__text}>©2023 DoneAlejandro</div>
      </div>
    </footer>
  );
};
