import React from "react";
import style from "../../common.module.scss";
import img from "../../images/image.png";
import figma from "../../images/figma.png";
// import dots from "../../images/dots.png";
// import js from "../../images/js.png";
// import html from "../../images/html.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { DiSass, DiJavascript1 } from "react-icons/di";

function Main() {
  return (
    <div className={style.main_container}>
      <div className={style.left_content}>
        <h5>FRONT-END DEVELOPER ENGINEER</h5>
        <h1>Arvi Jake Fernicol De Guzman</h1>
        <p>
          "If debugging is the process of removing software bugs, then
          programming must be the process of putting them in"
        </p>
        <ul>
          <li>
            <AiFillGithub />
          </li>
          <li>
            <AiFillLinkedin />
          </li>
          <li>
            <SiGmail />
          </li>
        </ul>
      </div>
      <div className={style.right_content}>
        <img src={img} />
      </div>
      <div className={style.avatar}>
        {/* <img className={style.figma} src={figma} /> */}
      </div>
      <div className={style.avatar}>
        {/* <img className={style.js} src={figma} /> */}
      </div>
      <div className={style.avatar}>
        {/* <img className={style.html} src={html} /> */}
      </div>
      <div className={style.avatar}>
        {/* <img className={style.dots} src={dots} /> */}
      </div>
    </div>
  );
}

export default Main;
