import "./ChartBar.css";

// Diagram sáv

function ChartBar(props) {
    let barFillHeight = "0%"; // Sáv kitöltés magassága.

    if(props.maxValue > 0) { // Ha a nullánál nagyob "maxValue" értéket kapok és, ha van akkor beállítom a sáv kitöltési magasságát.
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
        // A kapott értéket elosztom a maximális ésrtékkel és szorzom 100al, ez alapvetően megadja a százalékot 0 és 100 között, amellyel ezt a sávot ki kell tölteni. A végén a százalékjell alakítom karakter lánccá
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}/** Ez határozza meg (a kapott értéktől), hogy mennyivel lesz kitöltve a diagramsáv. A teljes diagramsáv előre meghatározott magassággal rendelkezik. A szülőtároló (chart) 100%, melynek magassága 10 rem. Úgy töltöm ki, hogy a kapott értéket a maximális értékhez (maxValue) viszonyítjuk. Tehát ha a teljes diagram maximális értke 100 és egy adoot diagramsáv értéke 50, akkor 50% töltöm ki a diagramsávot. A zárójelek között beállíthatnám az elem háttérszínét is pl. (background-color: 'red') */></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
