import react, { useState } from "react";
import NewExpense from "./NewExpense";
import './SuccessAddition.css'

function SuccessAddition(props) {
  const [isSuccess, setSuccess] = useState();

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

  return (
    <div>
      <h3 className="success">Success!</h3>
    </div>
  );
}

export default SuccessAddition;
