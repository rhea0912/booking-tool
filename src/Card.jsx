import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function Card({label="Today's user", value="2,300" }) {
    return (
            
            <div className="first-section">
              <FontAwesomeIcon icon={faUser} className="user-icon" />
              <div className="first">
                <p>{label}</p>
                <h3>{value}</h3>
              </div>
              <p><span>+10%</span> than last month</p>
            </div>

    );
  }
  
  export default Card;