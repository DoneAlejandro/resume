import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.container}>
      <div className="header">
        <h1 className="header__title">
          <NavLink to={"/"}>Болдырев Алексей</NavLink>
        </h1>
        <div className="header__navbar">
          <NavLink to={"/projects"}>Мои проекты</NavLink>
          <NavLink to={"/about"}>Обо мне</NavLink>
          <NavLink to={"/skills"}>Навыки</NavLink>
          <NavLink to={"/contact"}>Контакты</NavLink>
        </div>
      </div>
    </header>
  );
};
