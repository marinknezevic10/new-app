//page for listing all meetups
import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";
//using 'dummy data' just to list from 'api'
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetups() {
  //isloading element is a function for updating the state
  //usestate always returns an array with two elements
  //loading element is a current state snapshot

  const [loading, isLoading] = useState(true);

  //loading data we submitted on the firebase
  //we need to send http request
  //we want to send the request whenever we visit this page
  //get request sent by default
  //fetch returns a promise because of this we use then method
  //response.json gives us access to that data automatically converted from json to js object
  //json will return promise so we need to add antoher then block where we can get the actual data
  //react components must not return a promise but instead directly return jsx
  fetch("https://react-data-42ad1-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {
      response.json();
    })

    //we start in loading state and we set it to false once we have the data
    .then((data) => {
      isLoading(false);
    });

  //if we are loading we want to return another piece of jsx code
  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  //we only return the actual meetup list if we're done loading
  return (
    <section>
      <h1> All meetups</h1>
      <ul>
        <MeetupList meetups={DUMMY_DATA} />
      </ul>
    </section>
  );
}

export default AllMeetups;
