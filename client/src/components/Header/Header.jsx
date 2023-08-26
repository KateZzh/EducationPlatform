import style from "./style.module.css";
import { Link } from "react-router-dom";

function Header({ isAuth }) {
  return (
    <div className={style.wrapper}>
      <div className={style.hschool}>
        <Link to={"/"}>Hschool</Link>
      </div>

      <div className={style.btns}>
        {!isAuth ? (
          <>
            <div className={style.login}>
              <Link to={"/login"}>Login →</Link>
            </div>

            <Link to={"/reg"}>
              <div className={style.signUp}>Sign Up</div>
            </Link>
          </>
        ) : (
            <div className={style.login}>
              <Link to={"/"}>Sign Out →</Link>
            </div>
        )}
      </div>
    </div>
  );
}

export default Header;
