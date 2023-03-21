import React from "react";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FcApproval } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcLink } from "react-icons/fc";
//import { MDBIcon } from 'mdb-react-ui-kit';
//import { BG } from 'country-flag-icons/react/3x2'


//import { Link } from "react-router-dom";

import casino from "../../img/casino.9.jpg";
import pegasino from "../../img/pegasino1.png";

//import Card from "./card";
//import ResponsiveImage from "./img";
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
        <div className="Background">
    <div></div><div>
     <img class="img-fluid" src={casino}></img> 
    <div class="card text-center">
  <div class="card-body">
    <h5 class="card-title"><h1>PEGASINO</h1></h5>
    {/* <BG title="Bulgaria" className="falg"/> */}
    <p class="card-text text-start"><FcApproval size={38}/><strong>Always the best odds with Casino</strong></p>
    <p class="card-text text-start"><FcMoneyTransfer size={38}/><strong>Quick and easy deposits & withdrawals</strong></p>
    <p class="card-text text-start"><FcLink size={38}/><strong>Transparency, responsibility and security</strong></p>
    <button type="button" class="btn btn-success">REGISTER</button>

  </div>
</div>
    </div>
    </div>
	);
};

export default Home;
