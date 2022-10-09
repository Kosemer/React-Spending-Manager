import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense';
import './Components/Expenses/ExpenseItem.css'
//import proba from './Components/Expenses/proba';
import React, {useState} from 'react';

//EZ A SZÜLŐ KOMPONENS****************************************

const DUMMY_EXPENSES = [  //Itt létrehozom a "Költségek" tömböt. (KEZDETI_KIADÁSOK)
{
  id: "e1",
  title: "Toilet Paper",
  amount: 194.12,
  date: new Date(2020, 7, 14),
},
{
  id: "e2",
  title: "New TV",
  amount: 799.49,
  date: new Date(2021, 2, 12),
},
{
  id: "e3",
  title: "Car Insurance",
  amount: 294.67,
  date: new Date(2021, 2, 28),
},
{
  id: "e4",
  title: "New Desk (Wooden)",
  amount: 450,
  date: new Date(2021, 5, 12),
},
{
  id: "e5",
  title: "New Telephone",
  amount: 600.56,
  date: new Date(2021, 9, 5),
},
{
  id: "e6",
  title: "Laptop",
  amount: 599,
  date: new Date(2019, 10, 19),
},
{
  id: "e7",
  title: "Food",
  amount: 45.78,
  date: new Date(2019, 7, 28),
},
{
  id: "e8",
  title: "Forniture",
  amount: 630,
  date: new Date(2020, 11, 23),
},

{
  id: "e9",
  title: "Holiday",
  amount: 943.12,
  date: new Date(2022, 4, 14),
},
{
  id: "e10",
  title: "A handful sunflower seeds",
  amount: 9.49,
  date: new Date(2022, 7, 12),
},
{
  id: "e11",
  title: "A bag shit",
  amount: 44.67,
  date: new Date(2022, 2, 28),
},
{
  id: "e12",
  title: "1 gallon wi-fi",
  amount: 250.98,
  date: new Date(2020, 6, 12),
},
{
  id: "e13",
  title: "Cup of coffee",
  amount: 72.56,
  date: new Date(2019, 5, 5),
},
{
  id: "e14",
  title: "Mother ticket",
  amount: 640.56,
  date: new Date(2020, 0, 19),
},
{
  id: "e15",
  title: "Pen",
  amount: 20.78,
  date: new Date(2019, 5, 28),
},
{
  id: "e816",
  title: "Overpriced Vespa",
  amount: 1130,
  date: new Date(2022, 0, 23),
},

{
  id: "e17",
  title: "Goose chaser",
  amount: 943.12,
  date: new Date(2022, 9, 14),
},
{
  id: "e18",
  title: "inflation",
  amount: 509.49,
  date: new Date(2022, 10, 12),
},
{
  id: "e19",
  title: "Glove",
  amount: 44.67,
  date: new Date(2022, 2, 28),
},
{
  id: "e20",
  title: "Torn pants",
  amount: 250.98,
  date: new Date(2020, 6, 12),
},
{
  id: "e21",
  title: "Shoes with holes",
  amount: 452.56,
  date: new Date(2019, 4, 5),
},
{
  id: "e22",
  title: "Black hole",
  amount: 713.56,
  date: new Date(2020, 0, 19),
},
{
  id: "e23",
  title: "Wheel",
  amount: 100.78,
  date: new Date(2019, 3, 28),
},
{
  id: "e824",
  title: "T-shirt",
  amount: 99,
  date: new Date(2022, 0, 23),
},
];

function App() {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES); // A useState-nek kezdeti értékként beállítom a "DUMMY_EXPENSES"-t, tehát a kezdeti tömbömet.

//A "addExpenseHandler"-ben meghívom a "setExpenses" frissítési funkciót, egy új tömbbe, ami tartalmazza ezt az új kiadást (expense). A "prevExpenses"-ben megkapjuk a korábbi kiadásainkat és visszaadom az új tömböt (expense), ahol hozzáadom a korábbi kiadásokat (prevExpenses) spred (...) operátorral.
  function addExpenseHandler(expense){
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log('New Expense');
    console.log(expense);
    //console.log(proba());
  };

  // Az "expenses" így egy dinamikus lista lesz.
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App; //Ki exportáljuk az App.js-t, hogy más fájlokban is lehessen használni az adatait.
