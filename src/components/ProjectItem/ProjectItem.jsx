import React from "react";
import style from "./ProjectItem.module.scss";

export const ProjectItem = ({ img, title, subtitle, link }) => {
  return (
    <div className={style.item}>
      <div className={style.item__hover}>
        <span>{subtitle}</span>
        <a href={link} target="_blank" rel="noreferrer">
          More info on Git
        </a>
      </div>
      <div className={style.item__container}>
        <img src={img} alt={title} />
        <span>{title}</span>
      </div>
    </div>
  );
};
