import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/context";

function Header() {
  const { logOut, token } = useContext(AuthContext);
  const navigate = useNavigate();

  function back() {
    logOut();
    navigate("/");
  }

  return (
    <div className={style.wrapper}>
      <div className={style.hschool} onClick={back}>
        Hschool
      </div>

      <div className={style.btns}>
        {!token ? (
          <>
            <div className={style.login}>
              <Link to={"/login"}>Login →</Link>
            </div>

            <Link to={"/reg"}>
              <div className={style.signUp}>Sign Up</div>
            </Link>
          </>
        ) : (
          <div className={style.signOut} onClick={back}>
            Sign Out →
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
