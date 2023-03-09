import React from "react";



//create your first component
const Footer = () => {
	return (
        <div className="Footer">
        <footer class="bg-dark text-center text-white">
          <div class="container p-4">
            <section class="mb-4">
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-facebook-f"></i
              ></a>
        
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-twitter"></i
              ></a>
        
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-google"></i
              ></a>
        
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-instagram"></i
              ></a>
        
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-linkedin-in"></i
              ></a>
        
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-github"></i
              ></a>
            </section>
        
            <section class="">
              <form action="">
                <div class="row d-flex justify-content-center">
                  <div class="col-auto">
                    <p class="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
        
                  <div class="col-md-5 col-12">
                    <div class="form-outline form-white mb-4">
                      <input type="email" id="form5Example21" class="form-control" />
                      <label class="form-label" for="form5Example21">Email address</label>
                    </div>
                  </div>
        
                  <div class="col-auto">
                    <button type="submit" class="btn btn-outline-light mb-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>
        
            <section class="mb-4">
                <div><h4>RESPONSIBLE GAMING</h4> <p>
              Attention! Gambling can be addictive and is not suitable for solving financial problems. Please read terms and conditions and stay cool and bet responsibly. "COOLBET" is a registered trademark. Coolbet is offering independent sports book services and is not affiliated with sports teams, event organisers or players displayed in its websites.
              </p></div>
             
         
            </section>
        
            <section class="">
              <div class="row">
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">SPORTS</h5>
        
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">ALL SPORTS</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">LIVE BET</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">COOLBET LEAGUE</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">VIRTUAL SPORTS</a>
                    </li>
                  </ul>
                </div>
        
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">CASINO</h5>
        
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">CASINO LOBBY</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">LIVE CASINO</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">CASINO RACE</a>
                    </li>
                    
                  </ul>
                </div>
        
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">POKER</h5>
        
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">POKER</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">DOWNLOAD</a>
                    </li>
                
                  </ul>
                </div>
        
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">PROMOTIONS</h5>
        
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">COOLBET PROMOTIONS</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">REFER A FRIEND</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">BONUS</a>
                    </li>
                  
                  </ul>
                </div>
                
              </div>
            </section>
          </div>
        
          <div class="text-center p-3">
            © 2023 Copyright:
            <a class="text-white" href="https://www.pegasino.com/">www.pegasino.com</a>
          </div>
        </footer>
        </div>
	);
};

export default Footer;
