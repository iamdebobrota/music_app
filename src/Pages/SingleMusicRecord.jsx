import { Box, Button, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getMusicRecords } from "../Redux/AppReducer/action";

const SingleMusicRecord = () => {
  //some data in the params
  // get the id from the params
  //filter the music albums based on the id
  // get the album pertaining to that particular id

  const dispatch = useDispatch();
  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});
  const { id } = useParams();
  const { musicRecords } = useSelector((state) => state.AppReducer);

  useEffect(() => {
    if (!musicRecords.length) {
      dispatch(getMusicRecords());
    }
  }, [dispatch, musicRecords.length]);
  useEffect(() => {
    if (id) {
      const currentMusic = musicRecords.find((album) => album.id === id);
      currentMusic && setCurrentMusicAlbum(currentMusic);
    }
  }, [id, musicRecords]);


  return (
    <>
      <h1>SingleMusicRecord</h1>
<Center>

      <br />
      <br />
      <br />
      <br />
      <Box boxShadow='lg' p='6' rounded='md' bg='white'>
  
      <div >
        <h4> {currentMusicAlbum.id} </h4>
        <h4> {currentMusicAlbum.name} </h4>
        <h4> {currentMusicAlbum.genre} </h4>
        <img src={currentMusicAlbum.img} alt="pic" />
        <h4> {currentMusicAlbum.artist} </h4>
      </div>
  </Box>
</Center>

      <Link to={`/music/${id}/edit`}><Button colorScheme="teal">Edit</Button></Link>
    </>
  );
};

export default SingleMusicRecord;
