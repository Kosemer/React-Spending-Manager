//import react from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import SuccessAddition from "./SuccessAddition";
import react, { useState } from "react";

//EZ A GYEREK KOMPONENS, CSAK SZÜLŐ KOMPONENSNEK TUDNAK ADATOT ÁTADNI****************************************

function NewExpense(props) {

  const [isEditing, setIsEditing] = useState();
  const [isSuccess, setSuccess] = useState();

  function onSaveExpenseData(enteredExpenseData) {
    // Létrehozok egy "onSaveExpenseData" függvényt.
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //A props-on keresztül meghívom a "onAddExpense" függvényt, aminek átadom az expenseData adatatit.
    setIsEditing(false);
    stopSuccess(false); //Meghívom a felvitelkor a "stopSuccess" komponensem, ami eltünteti a feliratot. Van rajta egy 2 másoperces késleltetés is, hogy ne egyből tűntesse el a "Success" feliratot.
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function startSuccess() {
    //Ezt a komponenst átadom props-al az "ExpenseForm"-nak, hogy az "Add ixpense" gomb lenyomásakor írja ki, hogy Success.
    setTimeout(() => {
      setSuccess(true);
    });
  }

  function stopSuccess() {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onCancel={stopEditingHandler}
          onSuccess={startSuccess}
        ></ExpenseForm>
      )}
      {isSuccess && (
        <SuccessAddition teszt={onSaveExpenseData}></SuccessAddition>
      )}
    </div>
  );
}

export default NewExpense;
