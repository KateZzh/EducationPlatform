import style from "./style.module.css";
import Options from "./Options";
import Icons from "./Icons";

function Footer() {
  return (
    <>
      <div className={style.footerWrapper}>
        <div className={style.footerInfo}>
          <div className={style.footerInfoNav}>
            <Options data={["Home", "Textbook", "Statistics", "Sprint"]} />
          </div>

          <div className={style.footerPeople}>
            <Options data={["Alex", "Gabriel", "Marcus"]} />
          </div>
        </div>

        <div className={style.line}></div>

        <div className={style.footerContacts}>
          <div className={style.footerLogo}>
            <Icons data={["gitLogo", "gtLogo", "youtubeLogo"]} />
          </div>

          <p>©2021 Hschool. Project for Hschool.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
