import { createContext, useState } from "react";
import React from "react";
//page for adding to favorites
//storing it in a constant
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

//this component will have a job of providing this context to all the components that are interested in listenin to the provided values
//this function also responsible for updating the context values
//when we manage state in here the component will execute again, if we change our context value and we pass it to provider all components that are listening to our values will be updated
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavorite(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavorite(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavorite(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  //functions we are calling in meetupitem.js must be called as favorite,deleteFavorite,isFavorite and not addFavorite,removeFavorite,itemIsFavorite!!
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    favorite: addFavorite,
    deleteFavorite: removeFavorite,
    isFavorite: itemIsFavorite,
  };

  return (
    //value prop helps us to update new values
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
