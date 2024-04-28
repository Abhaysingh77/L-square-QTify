// import NavBar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import { useOutletContext } from 'react-router-dom';
import { Divider } from '@mui/material';

export default function Homepage () {
    const { data } = useOutletContext();
    const { topAlbumData = [], newAlbumData = [], songData = [], filters=[]} = data;
    return(
        <>
            <Hero />
            <Section albumData={topAlbumData} albumName="Top Album" type="album"/>
            <Section albumData={newAlbumData} albumName="New Album" type="album"/>
            <Divider sx={{borderColor:'#34C94B', marginTop:'4vw'}}/>
            <Section albumData={songData} albumName="Songs" type="song" filters={filters}/>
            <Divider sx={{borderColor:'#34C94B', marginTop:'4vw', marginBottom:'4vw'}}/>
        </>
    )
}