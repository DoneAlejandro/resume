import React from "react";
import style from "./Contact.module.scss";
import avatar from "../../../assets/images/avtar-contact.png";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import { Popup } from "../../Popup";
import { motion } from "framer-motion";

export const Contact = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={style.contact}>
        <div className={`${style.contact__wrapper} ${style.container}`}>
          <h1>Contacts</h1>
          <div className={style.contact__intro}>
            <div className={style.contact__list}>
              <div className={style.contact__item}>
                <a className={style.contact__link} href="https://t.me/DoneAlejandro" target="_blank" rel="noreferrer">
                  <FaTelegram size={50} />
                  <span>@DoneAlejandro</span>
                </a>
              </div>
              <div className={style.contact__item}>
                <a className={style.contact__link} href="mailto:alex-borodin88@mail.ru">
                  <ImMail4 size={50} />
                  <span>alex-borodin88@mail.ru</span>
                </a>
              </div>
              <div className={style.contact__item}>
                <a className={style.contact__link} href="https://github.com/DoneAlejandro" target="_blank" rel="noreferrer">
                  <FaGithub size={50} />
                  <span>DoneAlejandro</span>
                </a>
              </div>
            </div>
            <div className={style.contact__avatar}>
              <img src={avatar} alt="avatar-contact" />
            </div>
          </div>
          <div className={style.contact__send}>
            <h3>Any questions?</h3>
            <button onClick={() => setVisible(!visible)} className={style.contact__btn}>
              Send message
            </button>
          </div>
        </div>
        {visible && <Popup setVisible={setVisible} />}
      </div>
    </motion.div>
  );
};
