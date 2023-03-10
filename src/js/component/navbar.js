import React, {useState }from "react";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FaHome } from 'react-icons/fa'
import { FaBasketballBall } from 'react-icons/fa'
import { FaGamepad } from 'react-icons/fa'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { GiCard7Clubs } from 'react-icons/gi'
import { MdCasino, MdStars } from 'react-icons/md'
import { ImNewspaper } from 'react-icons/im'
import { BG } from 'country-flag-icons/react/3x2'





//create your first component
const Navbar = () => {
	return (
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
  <a class="navbar-brand" href="#"><h1><strong>PEGASINO</strong></h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
	  <li class="nav-item">
        <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" class="btn btn-dark"><div className="pad"></div><i>SPORTS</i></button><FaBasketballBall/></div></a>
        </li>
        <li class="nav-item">
        <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" class="btn btn-dark"><div className="pad"></div><i>CASINO</i></button><MdCasino/></div></a>
        </li>
        <li class="nav-item dropdown">
		<li class="nav-item">
        <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" class="btn btn-dark"><div className="pad"></div><i>LIVE CASINO</i></button><FaMoneyBillAlt/></div></a>
        </li>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
		  <li class="nav-item">
        <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" class="btn btn-dark"><div className="pad"></div><i>POKER</i></button><GiCard7Clubs/></div></a>
        </li>
			     </ul>
        </li>
        <li class="nav-item">
        <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" class="btn btn-dark"><div className="pad"></div><i>VIRTUAL GAMES</i></button><FaGamepad/></div></a>
        </li>
		
		
		<li class="nav-item">
        <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" class="btn btn-dark"><div className="pad"></div><i>BLOG</i></button><ImNewspaper/></div></a>
        </li>
      </ul>
      <form class="d-flex">
	  <div className="Login"><button type="button" className="btn btn-success">REGISTER</button></div>
	  <div className="Register"><button type="button" className="btn btn-success">LOGIN</button></div>
      </form>
    </div>
  </div>
</nav>
	);
};

export default Navbar;
