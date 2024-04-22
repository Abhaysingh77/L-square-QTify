// import './App.css';
import { StyledEngineProvider } from "@mui/material/styles";
import Homepage from "./pages/Homepage";
function App() {
  return (
      <StyledEngineProvider injectFirst>
        <Homepage />
      </StyledEngineProvider>
  );
}

export default App;
