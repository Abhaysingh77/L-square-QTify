// import './App.css';
import { StyledEngineProvider } from "@mui/material/styles";
import NavBar from "./components/Navbar/Navbar";
function App() {
  return (
      <StyledEngineProvider injectFirst>
        <NavBar />
      </StyledEngineProvider>
  );
}

export default App;
