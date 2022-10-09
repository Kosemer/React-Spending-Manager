import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
//import React, {useState} from 'react'; //Állapot frissítése egy adott elemnek.

function ExpenseItem(props){
 //const [title, setTitle] = useState(props.title); //Valójában a useState egy tömb, amiben kell lennie egy
 //változónak és egy függvénynek (a nevük tetszőleges)

  /*function clickHandler(){
    setTitle('Updated!'); //Az eseménykezelőben meghívjuk a fentebb definiált függvényt és átadjuk
    //neki a kívánt módosítást.
  }
  <button onClick={clickHandler}>Change Title</button>*/

    return(   //Itt állítom be a JSX-el az elemek elhelyezkedését.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className='expense-item h2'>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>

    </Card>
    );
}

export default ExpenseItem;