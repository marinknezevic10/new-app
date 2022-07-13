//here we are working on placing the data onto the server
import Card from "../userinterface/Card";
import classes from "./NewMeetupForm.module.css";
import React from "react";

//useRef hook is a great tool to persist data between renders without causing a rerender(ponovno učitavanje)
//ref is very useful tool for reading values
import { useRef } from "react";

//htmlfor as a prop
//to listen to the form submission we use onSubmit

function NewMeetupForm() {
  //this const establishes the connection and will give us access to the input element through the input element(title) through this ref object
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  //this function should be trigger when the submit event occures
  function Submit(event) {
    //preventing the browser default which automatically sends http request and refreshes the page we want to do that behind the scenes without refreshing the page! so we use just js and react
    event.preventDefault();

    //reading the entered values
    //extracting all the entered values into the submit function
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    //storing all the entered data into object
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={Submit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
