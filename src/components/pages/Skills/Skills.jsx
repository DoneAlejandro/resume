import React from "react";
import style from "./Skills.module.scss";
import avatar from "../../../assets/images/avtar-skills.png";
import { TbBrandJavascript } from "react-icons/tb";
import { DiReact, DiSass } from "react-icons/di";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={style.skills}>
        <div className={`${style.skills__wrapper} ${style.container}`}>
          <h1 className={style.skills__title}>My skills</h1>
          <div className={style.skills__intro}>
            <div className={style.skills__item}>
              <div className={style.skills__icon}>
                <TbBrandJavascript size={90} />
                <span>JavaScript</span>
              </div>
              <div className={style.skills__icon}>
                <DiReact size={90} />
                <span>React</span>
              </div>
              <div className={style.skills__icon}>
                <FaHtml5 size={90} />
                <span>HTML</span>
              </div>
              <div className={style.skills__icon}>
                <FaCss3Alt size={90} />
                <span>CSS</span>
              </div>
              <div className={style.skills__icon}>
                <DiSass size={90} />
                <span>SASS</span>
              </div>
              <div className={style.skills__icon}>
                <SiRedux size={90} />
                <span>Redux</span>
              </div>
            </div>
            <div className={style.skills__avatar}>
              <img src={avatar} alt="avatar-skills" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
