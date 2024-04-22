// import './App.css';
import { StyledEngineProvider } from "@mui/material/styles";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero Section/Hero";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <NavBar />
      <Hero />
    </StyledEngineProvider>
  );
}

export default App;
