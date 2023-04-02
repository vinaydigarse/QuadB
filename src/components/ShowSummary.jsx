import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Heading, Image,  Box, Text, Flex, Button} from '@chakra-ui/react'

function SummaryPage() {
  const { id } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setShow(data)})
      .catch(error => console.log(error));
  }, [id]);
  return (
    <Box p={8}>
    <Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md">{show.name}</Heading>
        <Button colorScheme="blue" >
          <a href="/">Home</a>
        </Button>
      </Flex>
    </Box>

    <Flex
      direction={["column", "column", "row"]}
      justifyContent="space-between"
      alignItems={["center", "center", "flex-start"]}
      mt="8"
      margin="50px 150px 10px 150px"
      border = "1px solid black" 
      borderRadius = "10px"
      p="20px 20px 20px 20px"
      boxShadow='md'
      
    >
      <Image
        boxSize={["200px", "200px", "300px"]}
        src={show.image?.original}
        alt={show.name}
        borderRadius = "10px"/>
      <Box
        ml={["0", "0", "8"]}
        mt={["4", "4", "0"]}
        textAlign={["center", "center", "left"]}
      >
        <Text fontSize="md" mb="4">
          {show.summary}
        </Text>
        <Text fontSize="sm">Language: {show.language}</Text>
        <Text fontSize="sm" mb="4">
          Genres: {`${show.genres}`}
        </Text>
        <Button colorScheme="blue" >
          <a href={show.officialSite}>Go to Official Site</a>
        </Button>
      </Box>
    </Flex>
  </Box>
  );
}

export default SummaryPage;
