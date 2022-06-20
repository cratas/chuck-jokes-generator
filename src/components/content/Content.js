import { React } from "react";
import { Container, Box } from "@mui/system";
import Header from "./Header";
import { MainContent } from "./MainContent";
import customClasses from "./Content.module.css";

const Content = () => {
  return (
    <Container className={customClasses.contentWrapper}>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        height="100vh"
        flexDirection="column"
      >
        <Header title="Chuck out some jokes"/>
        <MainContent />
      </Box>
    </Container>
  );
};

export default Content;
