import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLineChart, faTable, faWallet, faSignIn, faSignOut, faBarChart} from "@fortawesome/free-solid-svg-icons"
import Card from "./Card"
import Displays from "./Displays"
import "./App.css"
import chart from "./images/chart.png";
import chart1 from "./images/chart1.png";

function App() {
  return (
    <>
      <div className="header">
        <div className="side-bar">
        <FontAwesomeIcon icon={faLineChart} className="side-icon" title="Chart"/>
        <FontAwesomeIcon icon={faTable} className="side-icon"  title="table"/>
        <FontAwesomeIcon icon={faWallet} className="side-icon"  title="Billings"/>
        <FontAwesomeIcon icon={faSignIn} className="side-icon"  title="Sign-in"/>
        <FontAwesomeIcon icon={faSignOut} className="side-icon"  title="Sign-out"/>
        </div>
        <div className="right-bar container">
          <h3>Dashboard</h3>
        <div className="card">
          <Card label="Today's user" value="5,000"/>
          <Card />
          <Card />
          <Card />  
        </div>
        <div className="displays">
          <Displays src={chart}/>
          <Displays src={chart1}/>
          <Displays label="No data here" className="display-label"/>
        </div>
        <div className="footer">

        </div>

      </div>
      </div>
    </>
  );
}

export default App;
