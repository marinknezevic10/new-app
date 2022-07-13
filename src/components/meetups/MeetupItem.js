import classess from "./MeetupItem.module.css";

//using props to gather data one by one
//using props to pass data from one component to another
function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>Add to favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
