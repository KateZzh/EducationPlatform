import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css";

function RegPage() {
  return (
    <>
      <Header />
      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Sign Up</h1>

          {["Name", "Surname", "Password", "Confirm Password"].map((el) => (
            <div>
              <input type="text" placeholder={el}></input>
            </div>
          ))}

          <div className={style.loginBtn}>Sign Up</div>
        </div>

        <div className={style.loginImg}></div>
      </div>
      <Footer />
    </>
  );
}

export default RegPage;
