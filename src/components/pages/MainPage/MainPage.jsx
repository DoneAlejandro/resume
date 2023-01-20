import React from "react";
import style from "./MainPage.module.scss";
import avatar from "../../../assets/images/avatar-logo.png";

export const MainPage = () => {
  return (
    <div className={style.main}>
      <h1 className={style.main__title}>
        <span>Привет</span>, вы зашли в моё резюме, давайте познакомимся! Меня зовут Болдырев Алексей и я frontend разработчик.
      </h1>
      <div className={style.main__image}>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};
