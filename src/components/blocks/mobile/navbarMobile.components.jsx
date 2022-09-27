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
              <li><a className="navbar-mobile-item" href="#">Home</a></li>
              <li><a className="navbar-mobile-item" href="#">About</a></li>
              <li><a className="navbar-mobile-item" href="#">Team</a></li>
              <li><a className="navbar-mobile-item" href="#">Contact</a></li>
              <li><a className="navbar-mobile-item" href="#">Twitter</a></li>
          </ul>

            
        </div>

      );
    }
}

export default Navbar;