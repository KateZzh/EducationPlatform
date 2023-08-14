import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import style from "./style.module.css";

function RegPage() {
  const array = [
    { text: "Login", type: "text" },
    { text: "Email", type: "text" },
    { text: "Password", type: "password" },
    { text: "Confirm Password", type: "password" },
  ];

  return (
    <>
      <Header />

      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Sign Up</h1>

          <Input data={array} />

          <div className={style.loginBtn}>Sign Up</div>
        </div>

        <div className={style.loginImg}></div>
      </div>

      <Footer />
    </>
  );
}

export default RegPage;
