import 'assets/animation/keyframes.assets.css'
import 'assets/css/pages/global.assets.css';
import 'assets/css/blocks/navbar.assets.css';
import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/img/crest-icon.png"

class Navbar extends React.Component 
{
  render()
    {
      return(
          <div className="navbar flex row">

            <div className="navbar-logo flex row">
              <div className="navbar-logo-core flex row">
                <img className="navbar-logo" src={Logo} alt={Logo}/>
              </div>
            </div>

            <div className="navbar-link flex row">
              <div className="navbar-link flex column">
                  <a href="#home" className="link"><p className="link-title">Home</p></a>
                  <div className="link-bar"></div>
              </div>

              <div className="navbar-link flex column">
                  <a href="https://medium.com/@playCrest" className="link"><p className="link-title">Doc</p></a>
                  <div className="link-bar"></div>
              </div>

              <div className="navbar-link flex column">
                  <a href="" className="link"><p className="link-title">Charts</p></a>
                  <div className="link-bar"></div>
              </div>

              <div className="navbar-link flex column">
                  <a href="https://discord.com/invite/mUHGNqN8Vj" className="link"><p className="link-title">Community</p></a>
                  <div className="link-bar"></div>
              </div>
            </div>

            <div className="navbar-button flex row">
              <div className="navbar-button-core flex row">
                <button className="button dapp-button flex row center">Launch dApp</button>
              </div>
            </div>

          </div>

      );
    }
}

export default Navbar;
