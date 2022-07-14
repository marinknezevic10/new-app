import React from "react";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
//outputting favorites on the page
//we are using usecontext because we want to output all the favorites from our context

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
