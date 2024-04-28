import { StyledEngineProvider } from "@mui/material/styles";
import NavBar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { fetchTopAlbumData, fetchNewAlbumData, fetchSongData, fetchFilters } from "./api/api";
import { Outlet } from "react-router-dom";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songData, setSongData] = useState([]);
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    (async () => {
      setTopAlbumData(await fetchTopAlbumData());
      setNewAlbumData(await fetchNewAlbumData());
      setSongData(await fetchSongData());
      setFilters(await fetchFilters());
    })();
  }, []);
  return (
    <>
      <StyledEngineProvider injectFirst>
        <NavBar />
        <Outlet context={{ data: { topAlbumData, newAlbumData, songData, filters } }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
