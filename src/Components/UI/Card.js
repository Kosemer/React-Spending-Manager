import "./Card.css";

//EZ A GYEREK KOMPONENS****************************************

function Card(props) {
    const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
