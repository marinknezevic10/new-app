//page for listing all meetups
import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";

function AllMeetups() {
  //isloading element is a function for updating the state
  //usestate always returns an array with two elements
  //loading element is a current state snapshot

  const [loading, isLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

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
      setLoadedMeetups(data);
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
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
}

export default AllMeetups;
