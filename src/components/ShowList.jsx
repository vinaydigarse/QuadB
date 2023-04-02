import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  useColorMode,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./ShowList.css"

function ShowList() {
  const { colorMode, toggleColorMode} = useColorMode();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShows(data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <>
      <div className="app">
      <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md">TV Show App</Heading>
        <Button onClick={toggleColorMode} mt={5}>
        { colorMode === "light" ? "Dark" : "Light"}
      </Button>
      </Flex>
    </Box>
      
        <Flex justify="center" align="center" direction={["column", "row"]} wrap="wrap">
        {shows.map((show) => (
          <Box w={["100%", "45%", "30%"]} rounded="20px" overflow="hidden" bg={colorMode === "dark" ? "gray.700" : "gray.200"} mt={[5, 10]} mx={[0, 3, 5]} key={show.show.id}>
            <Image src={show.show.image?.original} h={"400px"} w={"100%"} alt=''/>
            <Box p={5}>
              <Stack align="center"><Text fontWeight={900} variant="solid" px={4}>{show.show.name}</Text></Stack>
              <Stack align="center">
                <Text as="h2" fontWeight="normal" my={2} >Rating - {show.show.rating.average}</Text>
              </Stack>
              <Flex>  
              <Link to={`/show/${show.show.id}`} id="viewBtn" >View Summary</Link>
              </Flex>
            </Box>
          </Box>
        ))}
        </Flex>
      </div>
    </>
  );
}

export default ShowList;
