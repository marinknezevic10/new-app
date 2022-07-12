import React from "react";
import { Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
//route component and we useit as a component and he defines different paths in url and which component should be loaded for the different paths

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetups />
      </Route>
      <Route path="./pages/NewMeetup">
        <NewMeetup />
      </Route>
      <Route path="./pages/Favorites">
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
