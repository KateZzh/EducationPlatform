import style from "./style.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.wrapper}>
      <h1>
        <Link to={"/"}>Hschool</Link>
      </h1>

      <div className={style.btns}>
        <div className={style.login}>
          <Link to={"/login"}>Login →</Link>
        </div>
        
        <Link to={"/singup"}>
          <div className={style.signUp}>Sign Up</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
