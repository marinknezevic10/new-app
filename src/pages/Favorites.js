import React from "react";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
//outputting favorites on the page
//we are using usecontext because we want to output all the favorites from our context
//as long as we stay on the page and navigate throught it our favorites dont get lost but if we refresh the page our favorites dissapear, this happens because using context our data stores only in memory cause we only are working with state and constants
function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  //helper variable content to check if we have favorites
  let content;
  //if we have no favorites output "You have no favorites" inače output the favorites
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites!</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My favorite meetups</h1>
      {content}
    </section>
  );
}
export default Favorites;
