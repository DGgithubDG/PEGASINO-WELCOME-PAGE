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
import Navbar from "./navbar";
import Card from "./card";
import Footer from "./footer";
//import Card from "./card";
//import ResponsiveImage from "./img";
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
        <div className="Background">
    <Navbar/>
{/* <Card/> */}
    <Footer/>
    </div>
	);
};

export default Home;
