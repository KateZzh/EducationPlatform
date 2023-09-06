import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./coursePage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoursePage = () => {
  const [res, setRes] = useState({});
  const [les, setLes] = useState([]);

  const { id } = useParams();

  async function getByIdCourse() {
    const res = await axios.get(`http://localhost:3001/course/${id}`);
    setRes(res.data[0]);
  }

  async function getByIdLessons() {
    const res = await axios.get(`http://localhost:3001/lesson/${id}`);
    setLes(res.data);
  }

  useEffect(() => {
    getByIdCourse();
    getByIdLessons();
  }, []);

  return (
    <div>
      <Header isAuth={true} />

      <div className={style.wrapper}>
        <div className={style.wrapperLeft}>
          <div className={style.wrapperCourse}>
            <div className={style.img}></div>

            <div className={style.course}>
              <h1>{res.course}</h1>
              <p>{res.description}</p>
            </div>
          </div>

          <div className={style.btn}>Go to course</div>
        </div>

        <div className={style.wrapperRight}>
          <h1>{les.length} lessons</h1>

          {les.map((el, index) => (
            <p key={index}>{el.title}</p>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoursePage;
