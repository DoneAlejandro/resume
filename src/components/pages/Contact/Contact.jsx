import React from "react";
import style from "./Contact.module.scss";
import avatar from "../../../assets/images/avtar-contact.png";
import { NavLink } from "react-router-dom";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { Popup } from "../../Popup";

export const Contact = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className={`${style.contact} ${style.container}`}>
      <h1>Контакты</h1>
      <div className={style.contact__intro}>
        <div className={style.contact__list}>
          <div className={style.contact__item}>
            <NavLink className={style.contact__link} href="https://t.me/DoneAlejandro">
              <FaTelegram size={50} />
              <span>@DoneAlejandro</span>
            </NavLink>
          </div>
          <div className={style.contact__item}>
            <NavLink className={style.contact__link} href="mailto:alex-borodin88@mail.ru">
              <ImMail4 size={50} />
              <span>alex-borodin88@mail.ru</span>
            </NavLink>
          </div>
          <div className={style.contact__item}>
            <NavLink className={style.contact__link} href="https://github.com/DoneAlejandro">
              <FaGithub size={50} />
              <span>DoneAlejandro</span>
            </NavLink>
          </div>
        </div>
        <div className={style.contact__avatar}>
          <img src={avatar} alt="avatar-contact" />
        </div>
      </div>
      <div className={style.contact__send}>
        <h3>Остались вопросы?</h3>
        <button onClick={() => setVisible(!visible)} className={style.contact__btn}>
          Отправить сообщение
        </button>
      </div>
      {visible && <Popup setVisible={setVisible} />}
    </div>
  );
};
