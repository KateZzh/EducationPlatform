import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import style from "./regPage.module.css";
import axios from "axios";
import { useState } from "react";

function RegPage() {
  const [inp, setInp] = useState({ name: "", surname: "", email: "", pwd: "" });

  async function createUser() {
    const request = await axios.post("http://localhost:3001/api/reg", inp);
    console.log(request.data);
  }

  const array = [
    { text: "name", type: "text" },
    { text: "surname", type: "text" },
    { text: "email", type: "text" },
    { text: "pwd", type: "password" },
  ];

  return (
    <>
      <Header isAuth={false} />

      <div className={style.reg}>
        <div className={style.regForm}>
          <h1>Sign Up</h1>

          <Input data={array} setInp={setInp} inp={inp} />

          <div className={style.regBtn} onClick={createUser}>
            Sign Up
          </div>
        </div>

        <div className={style.regImg}></div>
      </div>

      <Footer />
    </>
  );
}

export default RegPage;
