import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import style from "./loginPage.module.css";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/context";

function LoginPage() {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inp, setInp] = useState({ email: "", pwd: "" });

  async function authorizationUser() {
    const request = await axios.post("http://localhost:3001/api/auth", inp, {withCredentials: true});
    console.log(request.data);
    
    logIn();
    navigate("/students");
  }

  const array = [
    { text: "email", type: "text" },
    { text: "pwd", type: "password" },
  ];

  return (
    <>
      <Header />

      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Login</h1>

          <Input data={array} setInp={setInp} inp={inp} />

          <Button className={style.loginBtn} variant="contained" onClick={authorizationUser}>
            Login
          </Button>
        </div>

        <div className={style.loginImg}></div>
      </div>

      <Footer />
    </>
  );
}

export default LoginPage;
