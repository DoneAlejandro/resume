import React from "react";
import style from "./Projects.module.scss";
import pizza from "../../../assets/images/projects/pizza.png";
import brand from "../../../assets/images/projects/brand.png";
import ratio from "../../../assets/images/projects/ratio.png";
import slider from "../../../assets/images/projects/slider.png";
import training from "../../../assets/images/projects/training.png";
import relax from "../../../assets/images/projects/relax.png";
import { ProjectItem } from "../../ProjectItem";

export const Projects = () => {
  return (
    <main className={`${style.project} ${style.container}`}>
      <ProjectItem img={brand} title={"The Brand"} subtitle={"Online clothes store. The project is implemented using HTML, SCSS, JS."} link={"https://github.com/DoneAlejandro/TheBrand"} />
      <ProjectItem img={pizza} title={"React pizzas project"} subtitle={"Pizzas restaurant site. The project is implemented using react. Redux is used as a state manager."} link={"https://github.com/DoneAlejandro/Pizza"} />
      <ProjectItem img={ratio} title={"Ratio"} subtitle={"Classic SPA. The project is implemented using HTML, CSS."} link={"https://github.com/DoneAlejandro/Ratio"} />
      <ProjectItem img={training} title={"Aim Training"} subtitle={"The game for training your reaction. The project is implemented using HTML, CSS, JS."} link={"https://codepen.io/donealejandro/pen/NWzPLmv"} />
      <ProjectItem img={slider} title={"Slider"} subtitle={"Interesting slider. The project is implemented using HTML, CSS, JS."} link={"https://codepen.io/donealejandro/pen/bGKNVJV"} />
      <ProjectItem img={relax} title={"The board"} subtitle={"The game for relaxing.The project is implemented using HTML, CSS, JS."} link={"https://codepen.io/donealejandro/pen/yLEyJNy"} />
    </main>
  );
};
