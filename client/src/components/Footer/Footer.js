import style from "./style.module.css";

function Footer() {
  return (
    <>
      <div className={style.footerWrapper}>
        <div className={style.footerInfo}>
          <div className={style.footerInfoNav}>
            <p>Home</p>
            <p>Textbook</p>
            <p>Statistics</p>
            <p>Sprint</p>
          </div>

          <div className={style.footerPeople}>
            <p>Alex</p>
            <p>Gabriel</p>
            <p>Marcus</p>
          </div>
        </div>

        <div className={style.line}></div>

        <div className={style.footerContacts}>
          <div className={style.footerLogo}>
            <div className={style.gitLogo}></div>
            <div className={style.gtLogo}></div>
            <div className={style.youtubeLogo}></div>
          </div>

          <p>©2021 Hschool. Project for Hschool.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
