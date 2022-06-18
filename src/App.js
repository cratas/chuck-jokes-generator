import "./App.css";
import { Loader } from "./components/loader/Loader";
import { useEffect, useState } from "react";
import Content from "./components/content/Content";
import { useDispatch } from "react-redux";
import { setCategories } from "../src/store/categoriesSlice";

const App = () => {
  // state for managing loader
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  // useEffect hook which runs function on first argument on component render
  useEffect(() => {

    // get categories from API and save into redux store
    const result = dispatch(setCategories());

    // set isLoaded state after 3s
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
