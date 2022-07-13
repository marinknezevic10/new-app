import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

//mapping every meetup into another object
//{props.meetups.map(meetup => <MeetupItem/>)} transforming every meetup into a meetup item
//destructuring
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
