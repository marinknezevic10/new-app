//page for listing all meetups
import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
//useeffect is a hook that allows you to run some code under certain conditions

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
  //below we have a problem of infinite loop meaning this fetch component runs everytime when the component function runs with useeffect we are able to restrict this and set a condition when to run it

  useEffect(() => {
    isLoading(true);
    fetch("https://react-data-42ad1-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })

      //we start in loading state and we set it to false once we have the data
      .then((data) => {
        //we want to transform the data from object to an array to avoid errors
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        isLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

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
