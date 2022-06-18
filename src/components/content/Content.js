import { React } from "react";
import { Container, Box } from "@mui/system";
import Header from "./Header";
import { MainContent } from "./MainContent";

const Content = () => {
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
