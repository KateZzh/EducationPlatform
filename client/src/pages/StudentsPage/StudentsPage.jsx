import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./studentsPage.module.css";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [array, setArray] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  async function getAllCourses() {
    const res = await axios.get("http://localhost:3001/course/");
    setArray(res.data);
  }

  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const partArray = array.slice(firstIndex, lastIndex);
  const npage = Math.ceil(array.length / recordsPerPage);
  // const emptyRows = recordsPerPage - (array.length % recordsPerPage);

  return (
    <div>
      <Header />

      <div className={style.studentWrapper}>
        <div className={style.studentLogo}>
          <div className={style.studentLogoImg}></div>
          <h1>Courses</h1>
        </div>

        {partArray.map((el, index) => (
          <Link to={`/course/${el.id}`} key={index}>
            <div className={style.courseWrapper} key={index}>
              <div className={style.courseImg}></div>

              <div className={style.courseLanguage}>
                <h1>{el.course}</h1>
                <p>{el.description}</p>
              </div>
            </div>
          </Link>
        ))}

        {/* {array.length % recordsPerPage !== 0 && currentPage === npage ? (
          <div style={{ height: 256 * emptyRows }}></div>
        ) : null} */}

        <Pagination
          className={style.pagination}
          count={npage}
          variant="outlined"
          color="primary"
          size="large"
          onChange={(_e, p) => setCurrentPage(p)}
        />
      </div>

      <Footer />
    </div>
  );
};

export default StudentPage;
