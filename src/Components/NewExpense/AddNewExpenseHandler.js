import NewExpense from "./NewExpense";
import react, { useState } from "react";

function AddNewExpenseHandler() {
  const [isEditing, setIsEditing] = useState();

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <NewExpense
      startEditingHandler={startEditingHandler}
      stopEditingHandler={stopEditingHandler}
      isEditing={isEditing}
    ></NewExpense>
  );
}

export default AddNewExpenseHandler;
