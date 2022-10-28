import 'assets/animation/keyframes.assets.css'
import 'assets/css/pages/global.assets.css';
import 'assets/css/blocks/mobile/navbarMobile.assets.css';
import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/img/crest-icon.png"

class Navbar extends React.Component 
{

  constructor(props) 
  {
      super(props);

      this.state = 
      {
        menuToggle: false,
      };

  }

  toggleMenu()
  {
    this.state.menuToggle = !this.state.menuToggle
    if(this.state.menuToggle) document.querySelectorAll('.home').forEach((element) => { element.classList.add("menu-toggle") })
    else if(!this.state.menuToggle) document.querySelectorAll('.home').forEach((element) => { element.classList.remove("menu-toggle") })
  }

  render()
    {
      return(
        <div className="navbar-mobile-core flex row">

          

          <input id="navbar-toggle" type="checkbox" onClick={() => this.toggleMenu()} />
          <label className="navbar-mobile-label" htmlFor="navbar-toggle">
            <span className="navbar-mobile-span"></span>
          </label>

          <ul className="navbar-mobile">
              <li><a className="navbar-mobile-item" href="#home">Home</a></li>
              <li><a className="navbar-mobile-item" href="https://discord.com/invite/mUHGNqN8Vj">Community</a></li>
              <li><a className="navbar-mobile-item" href="https://medium.com/@playCrest">Medium</a></li>
              <li><a className="navbar-mobile-item" href="https://playcrest.gitbook.io/documentation/">Docs</a></li>
              <li><a className="navbar-mobile-item" href="https://twitter.com/playCrest">Twitter</a></li>
          </ul>

          <a href="https://testnet.playcrest.xyz" className="link button dapp-button-mobile flex row center" target="_blank" rel="noopener noreferrer"> Launch dApp </a>

            
        </div>

      );
    }
}

export default Navbar;
