import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import style from './notFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <div className={style.wrapperLeft}>
          <p className={style.statusCode}>Error 404</p>
          <h2>Hey Buddy</h2>
          <p className={style.description}>We can’t seem to find the page you are looking for.</p>

          <Link to={'/'}>
            <div className={style.btnGoHome}>Go home</div>
          </Link>
        </div>

        <div className={style.wrapperRight}>
          <div className={style.img}></div>
          <div className={style.shade}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
