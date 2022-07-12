import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Navigation from "./components/layout/Navigation";
//route component and we useit as a component and he defines different paths in url and which component should be loaded for the different paths
//with switch component we are telling react that only one router should be open
function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
