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
      <Box 
      p="20px 40px 0px 40px"
      
      >
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md">TV Show App</Heading>
        <Button onClick={toggleColorMode} mt={5}>
        { colorMode === "light" ? "Dark" : "Light"}
      </Button>
      </Flex>
    </Box>
      
        <Flex
      p="20px 30px 40px 30px"
        
        justify="center" align="center" direction={["column", "row"]} wrap="wrap">
        {shows.map((show) => (
          <Box border={"1px solid gray"} rounded={20} pt={"20px"} w={["100%", "45%", "30%"]} bg={colorMode === "dark" ? "white.700" : "white.200"} overflow="hidden" boxShadow='xl' mt={[5, 10]} mx={[0, 3, 5]} key={show.show.id}>
            <Image borderRadius={10} margin={"auto"} src={show.show.image?.original} h={"300px"} alt=''/>
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
