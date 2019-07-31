import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import Icon from "@material-ui/core/Icon";
import { Typography } from "@material-ui/core";
import MediaCard from "./components/card";

import "./App.scss";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await axios.get("https://swapi.co/api/people/");
        setLoading(false);
        // console.log(result.data.results);
        setData(result.data.results);
      } catch (error) {
        console.log("there was an error");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Typography variant="h1">React Wars</Typography>
      <Icon>star</Icon>
      <MediaCard data={data} />
    </div>
  );
};

export default App;
