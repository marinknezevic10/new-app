//we are doing this in different folder because it will not be rendered as routes but instead it will embedded and visible constantly,e its a navigation bar!!
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import { Link } from "react-router-dom";
import React from "react";
import classes from "./Navigation.module.css";
//link is not sending new request but instead just parse the url we want to go to, change it in the browser url bar and then loads the appropriate component on the screen using js and react, so we stay on the loaded page without sending extra request
//importing usecontext and favoritescontext so we can have a badge that shows how many favorite meetups we have
function Navigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>Meetups</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All meetups </Link>
          </li>
          <li>
            <Link to="/new-meetup"> Add Meetup </Link>
          </li>
          <li>
            <Link to="/favorites">
              {" "}
              My favorites{" "}
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
