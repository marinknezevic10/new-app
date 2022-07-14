import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
//storing the data on the server a little bit of backend
function NewMeetup() {
  const history = useHistory();
  //sending the http request to a backend
  function addMeetup(meetupData) {
    //fetch default js function allows us to send http requests
    //got the url from firebase database
    //this url can be manipulated
    //adding meetups to this url will add meetups table to that database
    //sending a post request to signal this api that we want to store the data
    //fetch is a get request
    //sending the data to that api
    //to send a post we add a second argument to fetch and is a second object which allows us to configure this fetch function and here we set a method property to define the http method that we will use
    //when we send the post request we also should add the data we want to store on the database(api) through the body field aka second argument we added
    //headers to add this extra metadata to outgoing request to make it clear that this request contains json data
    fetch("https://react-data-42ad1-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "aplication/json",
      },
      //coding below navigate us after we submit the form
      //history.replace we navigate to starting page
    }).then(() => {
      history.replace("/");
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
