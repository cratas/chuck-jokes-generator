import "./App.css";
import { Loader } from "./components/loader/Loader";
import { useEffect, useState } from "react";
import Content from "./components/content/Content";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoaded ? <Content /> : <Loader />;
};

export default App;
