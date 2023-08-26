import "./App.css";
import { Routes, Route } from "react-router-dom";
import PreviewPage from "./pages/PreviewPage/PreviewPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegPage from "./pages/RegPage/RegPage";
import StudentPage from "./pages/StudentsPage/StudentsPage";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Routes>
        <Route path="/" element={<PreviewPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/reg" element={<RegPage />}></Route>
        <Route path="/students" element={<StudentPage />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
