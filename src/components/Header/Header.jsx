import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

export const Header = () => {
  const [active, setActive] = React.useState(true);
  const toggleClass = () => {
    setActive(!active);
  };
  return (
    <header className={style.header}>
      <div className={`${style.header__wrapper} ${style.container}`}>
        <h1 className={style.header__title}>
          <NavLink to={"/"}>Болдырев Алексей</NavLink>
        </h1>
        <div className={active ? `${style.header__navbar}` : `${style.header__navbar} ${style._active}`}>
          <NavLink className={style.header__link} to={"/projects"}>
            Мои проекты
          </NavLink>
          <NavLink className={style.header__link} to={"/about"}>
            Обо мне
          </NavLink>
          <NavLink className={style.header__link} to={"/skills"}>
            Навыки
          </NavLink>
          <NavLink className={style.header__link} to={"/contact"}>
            Контакты
          </NavLink>
        </div>
        <div className={active ? `${style.header__icon}` : `${style.header__icon} ${style._active}`} onClick={() => toggleClass()}>
          <span></span>
        </div>
      </div>
    </header>
  );
};
