import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let initalGenreParams = searchParams.getAll("genre"); // [] getAll
  const [category, setCategory] = useState(initalGenreParams || []);

  let initialSortParams = searchParams.get("sortBy"); // string  get
  const [sortBy, setSortBy] = useState(initialSortParams || "");

  const handleGenreChange = (e) => {
    const option = e.target.value; // k-pop
    let newCategory = [...category]; // [k-pop]

    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category || sortBy) {
      const params = {};
      category && (params.genre = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]); // dependency

  return (
    <Box textAlign={'left'} paddingLeft={'8'} paddingTop={'5'}>
      <Text fontSize='xl' fontWeight={'bold'} textAlign={'left'}>Filter</Text>
      <div>
        <input
          value="K-Pop"
          checked={category.includes("K-Pop")}
          type="checkbox"
          onChange={handleGenreChange}
        />
        <label>K-Pop</label>
      </div>
      <div>
        <input
          value="Country"
          defaultChecked={category.includes("Country")}
          type="checkbox"
          onChange={handleGenreChange}
        />
        <label>Country</label>
      </div>
      <div>
        <input
          defaultChecked={category.includes("Holiday")}
          value="Holiday"
          type="checkbox"
          onChange={handleGenreChange}
        />
        <label>Holiday</label>
      </div>
      <div>
        <input
          defaultChecked={category.includes("Heavy Metal")}
          value="Heavy Metal"
          type="checkbox"
          onChange={handleGenreChange}
        />
        <label>Heavy Metal</label>
      </div>
      <div>
        <input
          defaultChecked={category.includes("Pop")}
          value="Pop"
          type="checkbox"
          onChange={handleGenreChange}
        />
        <label>Pop</label>
      </div>
      <Text fontSize='xl' fontWeight={'bold'} marginTop={'5'}>Sort</Text>
      <div>
        <div>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sortBy === "asc"}
            onChange={handleSortBy}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            value="desc"
            name="sortBy"
            defaultChecked={sortBy === "desc"}
            onChange={handleSortBy}
          />
          <label>Descending</label>
        </div>
      </div>
    </Box>
  );
};

export default FilterSort;
