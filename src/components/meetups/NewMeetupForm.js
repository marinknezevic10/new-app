//here we are working on placing the data onto the server
import Card from "../userinterface/Card";
import classes from "./NewMeetupForm.module.css";
import React from "react";

//htmlfor as a prop
//to listen to the form submission we use onSubmit

function NewMeetupForm() {
  //this function should be trigger when the submit event occures
  function Submit() {}

  return (
    <Card>
      <form className={classes.form} onSubmit={Submit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
