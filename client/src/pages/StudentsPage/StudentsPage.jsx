import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./studentsPage.module.css";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

const StudentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const arr = [
    {
      h1: "JavaScript",
      p: "JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.",
    },
    {
      h1: "TypeScript",
      p: "TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules.",
    },
    {
      h1: "Python",
      p: "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
    },
    {
      h1: "test1",
      p: "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
    },
    {
      h1: "test2",
      p: "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
    },
    {
      h1: "test3",
      p: "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
    },
    {
      h1: "test4",
      p: "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
    },
    {
      h1: "test5",
      p: "Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.",
    },
  ];

  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = arr.slice(firstIndex, lastIndex);
  const npage = Math.ceil(arr.length / recordsPerPage);
  const emptyRows = recordsPerPage - (arr.length % recordsPerPage);

  return (
    <div>
      <Header isAuth={true} />

      <div className={style.studentWrapper}>
        <div className={style.studentLogo}>
          <div className={style.studentLogoImg}></div>
          <h1>Courses</h1>
        </div>

        {records.map((el, index) => (
          <div className={style.courseWrapper} key={index}>
            <div className={style.courseImg}></div>

            <div className={style.courseLanguage}>
              <h1>{el.h1}</h1>
              <p>{el.p}</p>
            </div>
          </div>
        ))}

        {arr.length % recordsPerPage !== 0 && currentPage === npage ? (
          <div style={{ height: 256 * emptyRows }}></div>
        ) : null}

        <Pagination
          className={style.pagination}
          count={npage}
          variant="outlined"
          color="primary"
          size="large"
          onChange={(e, p) => setCurrentPage(p)}
        />
      </div>

      <Footer />
    </div>
  );
};

export default StudentPage;
