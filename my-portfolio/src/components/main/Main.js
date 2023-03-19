import React from "react";
import style from "../../common.module.scss";
import img from "../../images/image.png";
import figma from "../../images/figma.png";
// import dots from "../../images/dots.png";
// import js from "../../images/js.png";
// import html from "../../images/html.png";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

function Main() {
  return (
    <div className={style.main_container}>
      <div className={style.left_content}>
        <div className={style.job_description}>FRONT-END DEVELOPER ENGINEER</div>
        <div className={style.profile_name}>Arvi Jake Fernicol De Guzman</div>
        <p>
          "If debugging is the process of removing software bugs, then
          programming must be the process of putting them in"
        </p>
        <ul>
          <li>
            <a href="https://github.com/WoChiMao"><AiFillGithub /></a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/arvi-jake-de-guzman-256873232/"><AiFillLinkedin /></a>
          </li>
          <li>
            <SiGmail />
          </li>
          <li>
            <AiFillFacebook />
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
