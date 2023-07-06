import React from "react";
import FilterSort from "../Components/FilterSort";
import MusicRecords from "./MusicRecords";
import styled from "styled-components";

const Homepage = () => {
  return (
    <div>
      <HomePageWrapper>
        <FilterSortWrapper>
          <FilterSort />
        </FilterSortWrapper>
        <MusicRecorderWrapper>
          <MusicRecords />
        </MusicRecorderWrapper>
      </HomePageWrapper>
    </div>
  );
};

export default Homepage;

const HomePageWrapper = styled.div`
  display: flex;
  height: 90vh;
`;
const FilterSortWrapper = styled.div`
  position: fixed;
  background-color: #edf2f2;
  height: 100vh;
  width: 200px;
  border-radius: 1px;
`;

const MusicRecorderWrapper = styled.div`
  width: 90%;
  margin-left: 150px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  justify-content: center;
  gap: 10px;
  border-radius: 20px;
`;
