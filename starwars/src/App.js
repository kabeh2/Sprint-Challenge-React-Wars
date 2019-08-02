import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import Icon from "@material-ui/core/Icon";
import { Typography } from "@material-ui/core";
import MediaCard from "./components/card";

import "./App.scss";
import NextBtn from "./components/nextBtn";
import PrevBtn from "./components/prevBtn";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://swapi.co/api/people/");
  const [backBtn, setBackBtn] = useState("");
  const [nextBtn, setNextBtn] = useState("");

  useEffect(() => {
    // Set up a cancellation source
    let source = axios.CancelToken.source();

    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await axios.get(apiUrl, { cancelToken: source.token });

        setLoading(false);
        setData(result.data.results);
        setAllData(result.data);
        setBackBtn(result.data.previous);
        setNextBtn(result.data.next);

        console.log(result.data);
      } catch (error) {
        // Is this error because we cancelled it ourselves?
        if (axios.isCancel(error)) {
          console.log(`call for ${apiUrl} was cancelled`);
        } else {
          throw error;
        }
      }
    };

    fetchData();

    return () => {
      // Let's cancel the request on effect cleanup
      source.cancel();
    };
  }, [apiUrl]);

  const handlePrev = () => {
    setApiUrl(backBtn);
    console.log("New Url: " + apiUrl);
  };
  const handleNext = () => {
    setApiUrl(nextBtn);
    console.log("New Url: " + apiUrl);
  };
  console.log("Back: " + backBtn);

  return (
    <div className="App">
      <CssBaseline />
      <Typography variant="h1">React Wars</Typography>
      <Icon>star</Icon>
      <MediaCard data={data} />

      <PrevBtn
        prev={backBtn}
        allData={allData}
        apiUrl={apiUrl}
        onClick={handlePrev}
      />

      {nextBtn === null ? (
        <NextBtn
          next={nextBtn}
          allData={allData}
          apiUrl={apiUrl}
          onClick={handleNext}
          disabled={true}
        />
      ) : (
        <NextBtn
          next={nextBtn}
          allData={allData}
          apiUrl={apiUrl}
          onClick={handleNext}
          disabled={false}
        />
      )}
    </div>
  );
};

export default App;
