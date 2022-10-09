import Chart from "../Chart/Chart";

function ExpensesChart(props){
    const chartDataPoints = [
        // Itt a tömbön belül minden adatpont egy objektum. Így a "chart"-on elérjük külön a "label", "value" értékeket. Ezért ezeknek az objektumoknak címkével és érték kulcsokkal kell rendelkezniük. Kezdetben minden érték nulla lesz. Ez lejjebb a "for" ciklusban változni fog.
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ];


    // Úgy oldaottam meg az "All"-t, hogy props a "filteredYear"-t és, ha az egyenlő az "All"-al akkor a for ciklus a props-on átadott expenses2-ön menjen végig. Amit az "Expenses" komponensben hoztam létre.
    if(props.filteredYear === 'All'){
        for (const expense of props.expenses2)
        {
           const expenseMonth = expense.date.getMonth();
           //Megkeresem a diagram adatpontjait az adott hónapra és frissítem a kiválasztott adatpont értékét úgy, hogy hozzáadom költség összegét.
           chartDataPoints[expenseMonth].value += expense.amount;
           console.log(props.filteredYear);
       }
    }
    // A "for" cikusban az összes költséget (expense) átnézem, amit "props"-on keresztül kapok.
    for (const expense of props.expenses)
     {
        const expenseMonth = expense.date.getMonth();
        //Megkeresem a diagram adatpontjait az adott hónapra és frissítem a kiválasztott adatpont értékét úgy, hogy hozzáadom költség összegét.
        chartDataPoints[expenseMonth].value += expense.amount;
        console.log(props.filteredYear);
    }
    // Itt visszaadom magát a diagramot az értékekkel együtt.
    return <Chart dataPoints={chartDataPoints}></Chart>
}

export default ExpensesChart;