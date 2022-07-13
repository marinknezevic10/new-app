import classes from "./Card.module.css";
import React from "react";
//the goal is to use card component in the different places of app
//props.children is a special prop which every component receives by default adn children always holds the content which is passed between opening and closing component tags
//the jsx content between <Card></Card> in the meetupitem file is stored in the children component!
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
