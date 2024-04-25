//all the api calls is here:-

import axios from 'axios'
async function fetchTopAlbumData() {
   try {
    const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
    const data = await res.data;
    console.log(data);
    return data;
   }catch(e) {
    console.error(e);
   }
}
async function fetchNewAlbumData() {
   try {
    const res = await axios.get(`https://qtify-backend-labs.crio.do/albums/new`);
    const data = await res.data;
    console.log(data);
    return data;
   }catch(e) {
    console.error(e);
   }
}

export {fetchTopAlbumData, fetchNewAlbumData};