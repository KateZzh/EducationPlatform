import { Routes, Route } from "react-router-dom";
import PreviewPage from "../pages/PreviewPage/PreviewPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegPage from "../pages/RegPage/RegPage";
import StudentPage from "../pages/StudentsPage/StudentsPage";
import CoursePage from "../pages/CoursePage/CoursePage";

function RouteProvider(isAuth) {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/students" element={<StudentPage />}></Route>
        <Route path="/course/:id" element={<CoursePage />}></Route>
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<PreviewPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/reg" element={<RegPage />}></Route>
    </Routes>
  );
}

export default RouteProvider;
