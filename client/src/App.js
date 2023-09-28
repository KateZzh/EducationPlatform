import RouteProvider from "../src/RouteProvider/RouteProvider";
import useAuth from "./hooks/useAuth";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./Theme";
import AuthContext from "./context/context";

function App() {
  const data = useAuth();
  const route = RouteProvider(!!data.token);
  return (
    <AuthContext.Provider value={data}>
      <ThemeProvider theme={customTheme}>{route}</ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
