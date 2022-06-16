import { React, useEffect, useState } from "react";
import axios from "axios";
import {  getRandomJokes } from "../../utils/getRandomJokes";

const Content = () => {
  const [data, setData] = useState();

  //   const getData = () => {
  //     axios
  //       .get(`https://api.chucknorris.io/jokes/random`)
  //       .then((res) => {
  //         const data = res.data;
  //         // setData({ data });
  //         console.log(data.value)
  //       })
  //       .catch((err) => {
  //         setData("kamil");
  //       });
  //   };

  useEffect(() => {
    getRandomJokes().then((res) => {
        console.log(res.data)
    }).catch(() => {
        console.log("bad");
    })
  }, []);

  return <div></div>;
};

export default Content;
