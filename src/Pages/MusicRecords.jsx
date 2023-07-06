import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteFunc, getMusicRecords } from "../Redux/AppReducer/action";
import {
  useSearchParams,
  useLocation,
  Link,
  useParams,
} from "react-router-dom";
import { Box, Button, Center, Text } from "@chakra-ui/react";

const MusicRecords = () => {
  const dispatch = useDispatch();
  const { musicRecords, isLoading, isError } = useSelector(
    (store) => store.AppReducer
  );
  // console.log(1, musicRecords);
  const [searchParams] = useSearchParams();

  const location = useLocation();
  // console.log("location",location)
  const handleDelete = (id) => {
    dispatch(deleteFunc(id)).then(() => {
      // console.log("deletefunction called ")
      dispatch(getMusicRecords());
    });
  };

  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const sortBy = searchParams.get("sortBy");

      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      // console.log("called");
      dispatch(getMusicRecords(queryParams));
    }
  }, [location.search]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10",
          margin: "10",
        }}>
        {musicRecords?.map(
          (
            album //optional chaining
          ) => (
            <MusicRecordssWrapper key={album.id}>
              <div>
                {" "}
                <h1 fontWeight="bold"> {album.name}</h1>{" "}
              </div>
              <Link className="linkbaaz" to={`/music/${album.id}`}>
                <Center >
                  <img src={album.img} alt="img not found" />
                </Center>
              </Link>
              <div></div>
              <h2>{album.genre} </h2>
              <h2> {album.year} </h2>
              <Button
                  colorScheme="red"
                 size={'xs'}
                  onClick={() => {
                    handleDelete(album.id);
                  }}>
                  Delete
                </Button>
            </MusicRecordssWrapper>
          )
        )}
      </div>
    </>
  );
};

export default MusicRecords;

const MusicRecordssWrapper = styled.div`
  width: 260px;
  height: fit-content;
  padding:10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  margin-top: 20px;
  margin-right: 20px;
`;
