import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import style from "./style.module.css";

function LoginPage() {
  const array = [
    { text: "Login", type: "text" },
    { text: "Password", type: "password" },
  ];

  return (
    <>
      <Header />

      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Login</h1>

          <Input data={array} />

          <div className={style.loginBtn}>Login</div>
        </div>

        <div className={style.loginImg}></div>
      </div>

      <Footer />
    </>
  );
}

export default LoginPage;
