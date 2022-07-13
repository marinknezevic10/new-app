import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
//storing the data on the server a little bit of backend
function NewMeetup() {
  //sending the http request to a backend
  function addMeetup(meetupData) {
    //fetch default js function allows us to send http requests
    //got the url from firebase database
    //this url can be manipulated
    //adding meetups to this url will add meetups table to that database
    //sending a post request to signal this api that we want to store the data
    //fetch is a get request
    fetch("https://react-data-42ad1-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
  }
  return (
    <section>
      <h1>New meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </section>
  );
}

export default NewMeetup;
