import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  //Itt ugye egy tömböt kapunk vissza (props.dataPoints), ami objektumokat tárol. És nekem az objektum meghatározott tulajdonsága érdekel (value). Átalakítom objektumokat számmá. Tehát minden adatponthoz végül csak adatpont pontértéket adunk vissza. Így a 12 hónapból 12 értékből álló tömbbünk lesz.
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //És mivel a "dataPointValues" még mindig egy tömb így hasznáhatjuk a spred (...) operátort. Tehát a "totalMaximum" constans 12 argumentumot kap.
  const totalMaximum = Math.max(...dataPointValues);
  //console.log(props.dataPoints)
  //console.log(dataPointValues)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (  // A "dataPoints" egy tömb, ami az "ExpensesChart" ból jón props-on keresztül. Meghívom rá a "map" függvényt és minden egyes adatpontot leképezek (<ChartBar>). Tehát annyi diagramsáv összetevőt hozunk létre, amennyi visszakapunk a tömbben. És kinyerünk belőle néhány adatot, ami szabályozza hogyan jelenjen meg, tehát milyen értékek jelenkójenek meg (key,value, label...)
        <ChartBar
          key={dataPoint.label} // Mivel ez egy lista, ezért kulcsot is kell kapnia az elemeknek a hatékony megjelenítés miatt. A címkék ugye önmagukban is egyediek, ezért használhatom kulcsként is őket.
          value={dataPoint.value}
          maxValue={totalMaximum} // Ezzel meghatározzuk, hogy minden diagram sáv ábrázolja az értéket a teljes diagram maximális értékéhez viszonyítva.
          label={dataPoint.label} // A címke jeleníti meg, hogy milyen hónap (január, február...)
        />
      ))}
    </div>
  );
}

export default Chart;
