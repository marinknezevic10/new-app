import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import React from "react";
//mapping every meetup into another object
//{props.meetups.map(meetup => <MeetupItem/>)} transforming every meetup into a meetup item
//destructuring
//built in js, "map" component allows us to execute a function one every element in an array transform the data and then return the transformed data in a new array
//important to add meetups props because we are expecting it inside of the component in the meetuplist file
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
