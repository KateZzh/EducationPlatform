import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css";

function LoginPage() {
  return (
    <>
      <Header />
      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Login</h1>

          {["Login", "Password"].map((el) => (
            <div>
              <input type="text" placeholder={el} />
            </div>
          ))}

          <div className={style.loginBtn}>Login</div>
        </div>

        <div className={style.loginImg}></div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
