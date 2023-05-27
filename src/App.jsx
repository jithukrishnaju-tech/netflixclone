import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useStyle from "./styles";
import { CssBaseline } from "@mui/material";
import {
  Navbar,
  Actors,
  Movieinformation,
  Movies,
  Profile,
} from "./components";
const App = () => {
  const classes = useStyle();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar />
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Routes>
            <Route path="/" exact element={<Movies />} />
            <Route path="/Actors" exact element={<Actors />} />
            <Route
              path="/Movieinformation"
              exact
              element={<Movieinformation />}
            />
            <Route path="/Profile" exact element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
