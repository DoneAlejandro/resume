import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import bg from "../../assets/images/withHeader.webp";

export const Header = () => {
  const [active, setActive] = React.useState(true);
  const toggleClass = () => {
    setActive(!active);
  };
  return (
    <header className={style.header}>
      <div className={style.header__bg}>
        <img src={bg} alt="bg" />
      </div>
      <div className={`${style.header__wrapper} ${style.container}`}>
        <h1 className={style.header__title}>
          <NavLink to={"/"}>Alexey Boldyrev</NavLink>
        </h1>
        <div className={active ? `${style.header__navbar}` : `${style.header__navbar} ${style._active}`}>
          <NavLink className={style.header__link} to={"/projects"}>
            My projects
          </NavLink>
          <NavLink className={style.header__link} to={"/about"}>
            About me
          </NavLink>
          <NavLink className={style.header__link} to={"/skills"}>
            Skills
          </NavLink>
          <NavLink className={style.header__link} to={"/contact"}>
            Contacts
          </NavLink>
        </div>
        <div className={active ? `${style.header__icon}` : `${style.header__icon} ${style._active}`} onClick={() => toggleClass()}>
          <span></span>
        </div>
      </div>
    </header>
  );
};
