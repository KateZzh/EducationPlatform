import React from "react";
import Header from "../../components/Header/Header";
import style from "./style.module.css";

const StudentPage = () => {
  return (
    <div>
      <Header />
      <div className={style.studentWrapper}>
        <div className={style.studentLogo}>
          <div className={style.studentLogoImg}></div>
          <h1>Courses</h1>
        </div>

        <div className={style.courseWrapper}>
          <div className={style.courseImg}></div>
          <div className={style.courseLanguage}>
            <h1>JavaScript</h1>
            <p>
              JavaScript is a practical course where students learn the basics of JavaScript. It
              covers variables, operators, conditionals, loops, functions, and data manipulation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
