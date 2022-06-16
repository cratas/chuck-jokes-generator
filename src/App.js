import "./App.css";
import { Loader } from "./components/loader/Loader";
import { useEffect, useState } from "react";
import Content from "./components/content/Content";

const App = () => {
  // state for managing loader
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect hook which runs function on first argument on component render
  useEffect(() => {

    // set isLoaded state after 3s
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoaded ? <Content /> : <Loader />;
};

export default App;
