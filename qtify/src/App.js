// import './App.css';
import { StyledEngineProvider } from "@mui/material/styles";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero Section/Hero";
// import { Divider } from '@mui/material'
import { useEffect, useState } from "react";
import { fetchTopAlbumData, fetchNewAlbumData } from "./api/api";
import Section from "./components/Section/Section";
function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  useEffect(() => {
    (async () => {
      setTopAlbumData(await fetchTopAlbumData());
      setNewAlbumData(await fetchNewAlbumData());
    })();
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <NavBar />
      <Hero />
      <Section topAlbumData={topAlbumData} albumName="Top Album" />
      <br/>
      <br/>
      <hr/>
      <Section topAlbumData={newAlbumData} albumName="New Album" />
    </StyledEngineProvider>
  );
}

export default App;
