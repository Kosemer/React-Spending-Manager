/* A PROPS HASZNÁLATA

Létrehoztam ezt a komponenst és az "Expenses" komponensből szeretnék használni itt egy változót. Egész pontosan a "counter"-t. Ezt a komponensemet ki exportálom és az "Expenses" komponensben "létrehozom" JSX-ben, íme: <Counter valami23={counter}></Counter>, Ezután létrehozok benne egy tetszőleges változót "valami23" és átadom neki a "counter" változót, ami ugye az "Expenses" komponensben van. Ezután ebben a komponensben funkciónál beírom a props-ot "function Counter (props)". És innentől kezdve simán elérem. Ami fontos, hogy az eredeti változót nem lehet egy másik komponensből felülírni, tehát innen sem. Viszont, ha itt létrehozok egy új változót és annak értékül adom akkor már több mindent is lehet vele kezdeni...
*/
import './Counter.css'

function Counter (props) {
        return (
        <div>
        <h5 className="counter">Number of hits: {props.counterJS}</h5>
        </div>
    )
}

export default Counter;