import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import Counter from "./Counter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("All");
  console.log(filteredYear);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  /*{props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}  --- A props-on keresztül hozzáférek a kiadásokhoz(items). "map" metódus: létrehoz egy új tömböt egy másik tömb alapján az új értékekkel. Az "expense"-el megkapjuk a költségünket, majd a nyíl után (a funkció testben) visszaadom a JSX elemet, amelybe ezt a kiadást szeretném feltérképezni. Ezután pedig konfiguráljuk, tehát title={expense.title} stb. */

  // A "filter" metódus egy új tömbbel tér vissza. Nem az eredetit adja vissza.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /* Ennek az a lényege, hogy az "expensesContent" változónak alapból azt az értéket adom, hogy "No expenses found!" ez ugye akkor teljesül (if...), ha a "filteredExpnses"-nek a hossza kisebb mint 1, ha ez a feltétel nem teljesül akkor a változó értékéhez nem nyúl hozzá és marad "No expenses found!", ha teljesül, mert van legalább egy elem akkor az "ExpenseItem" JSX-et, amibe meg ugye benne vannak a feltételnek megfelelő elemek.  Lent a JSX kódban meg csak a változót illesztem be {expensesContent}.*/

  let expensesContent = (
    <p className="filter_notFound">No expenses found this year!</p>
  );

  //let valami = "All";
  let allT = "";
  const all = props.items;

  // Számláló
  let counter = 0;

  if (filteredYear === "All") {
    expensesContent = "";
    allT = all.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
    counter = allT.length;
    //console.log(valami);
    //console.log(filteredExpenses);
  }

   if (filteredExpenses.length > 0) {
    allT = "";
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
    counter = expensesContent.length;
    //console.log(filteredExpenses);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses} expenses2 = {all} filteredYear={filteredYear}></ExpensesChart>
        <Counter counterJS={counter}></Counter>
        {allT}
        {expensesContent}
      </Card>
    </div>
  );
}

/*{filteredExpnses.length === 0 ? (<p>No expenses found</p>) : 
        filteredExpnses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} */

// Ez egy javascript hármas kifejezés szintaxis. Eleje az állapot, ?, ha igaz (=== 0) akkor mit akarunk tenni, : ha nem teljesül akkor meg listázza.

export default Expenses;
