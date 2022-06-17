import { React, useEffect, useState } from "react";
import { getRandomJoke } from "../../utils/getRandomJoke";
import { Container, Box } from "@mui/system";
import Header from "./Header";
import { MainContent } from "./MainContent";

const Content = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getRandomJoke()
      .then((res) => {
        // console.log(res.data)
        setData(res.data.value);
      })
      .catch(() => {
        console.log("bad");
      });
  }, []);

  return (
    <Container>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent={"center"}
        height="100vh"
        flexDirection={"column"}
      >
        <Header /> 
        <MainContent />
      </Box>
    </Container>
  );
};

export default Content;
