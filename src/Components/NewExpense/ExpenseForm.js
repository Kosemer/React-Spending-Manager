import "./ExpenseForm.css";
import "./NewExpense.css";
import { useState } from "react";

//EZ A GYEREK KOMPONENS****************************************

function ExpenseForm(props) {
  //Létrehozom a beviteli mezőket. Az onChange figyeli, hogy a beviteli
  // mezőben történt e gomb lenyomás, ha igen akkor meghívhja a titleChangeHandler függvényt.
  /* 
    function titleChangeHandler(event){
        console.log(event);
        // Ezzel meg tudom nézni a böngésző fejlesztői konzolában, hogy az adott függvény milyen adatokat ad vissza. Ha ezt megnézed, akkor nyisd le az Object-et és utána a taget-et, lefele görgetve találsz egy olyan értéket, hogy value és ez a bement aktuális értékét tartalmazza (tehát a leütött gombokat)

        console.log(event.target.value); Ezzel pedig a konzolon fogjuk látni a bemeneti mező az aktuális értékét (tehát a leütött gombokat).
.    }*/

  const [enteredTitle, setEnteredTitle] = useState(""); //Kezdetben a "useState" egy üres karakterlánc, mert ugye alapból nem adunk meg neki semmit, tehát üresek a beviteli mezők.
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isValid, setIsValid] = useState(true);

  // BEVITELI MEZŐ ÉRTÉKEINEK KIOLVASÁSA A FÜGGVÉNYEK SEGÍTSÉGÉVEL./////////////////////////////

  function titleChangeHandler(event) {
    //Ez egy függvény, ami figyeli a hozzá kapcsolt beviteli mezőt,
    // hogy történt-e változás.
    setEnteredTitle(event.target.value); //Itt elkérem az adott mező értékét.
    //Ugye ez a "useState"-ben definiált függvény.
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault(); //Ez a függvény (beépített) arra kell, hogy letiltsuk az oldal újra betöltését.
    //Alapértelmezetten a böngésző egy űrlap beküldésekor újratölti az oldalt.
    if (enteredTitle == 0 || enteredAmount == 0 || enteredDate == 0) {
      return setIsValid(false);
    }
    console.log(isValid);
    // ADATOK TÁROLÁSA////////////////////////////

    const expenseData = {
      //Ebben az objetumban tároljuk a kapott értékeket.
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    props.onSuccess();
    // BEVITELI MEZŐK TÖRLÉSE//////////////////////////

    setEnteredTitle(""); //Meghívom a "sentEnteredTitle"-t és visszaállítom egy üres karakterláncra, ami egyben a kezdeti értéke is volt.
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control_label">Title:</label>
          <input
            className="new-expense__control_input"
            type="text"
            value={enteredTitle} //Értéket adok a mezőnek, kezdetben üres és az űrlap mentésekor megint üres,mert törlöm.
            onChange={titleChangeHandler}
            placeholder = "Title"
          ></input>
          {!isValid&&enteredTitle.length<=0?<label className="new-expense__control_validation">Title is required</label>:""}
        </div>
        
        <div className="new-expense__control">
          <label className="new-expense__control_label">Amount:</label>
          <input
            className="new-expense__control_input"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
          {!isValid&&enteredAmount.length<=0?<label className="new-expense__control_validation">Amount is required</label>:""}
        </div>
        
        <div className="new-expense__control">
          <label className="new-expense__control_label">Date:</label>
          <input
            className="new-expense__control_input"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
          {!isValid&&enteredDate.length<=0?<label className="new-expense__control_validation">Date is required</label>:""}
        </div>
        
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
