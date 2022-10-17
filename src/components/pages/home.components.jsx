import 'assets/animation/keyframes.assets.css'
import 'assets/css/pages/index.assets.css'
import 'assets/css/pages/global.assets.css'
import 'assets/css/pages/home.assets.css'
import 'assets/css/blocks/mobile/homeMobile.assets.css'
import React from "react"
import { Link } from "react-router-dom"
import Navbar from "components/blocks/navbar.components.jsx"
import NavbarMobile from "components/blocks/mobile/navbarMobile.components.jsx"
import Badges from "components/blocks/badges.components.jsx"
import About from "components/blocks/about.components.jsx"
import Help from "components/blocks/help.components.jsx"
import Roadmap from "components/blocks/roadmap.components.jsx"
import Team from "components/blocks/team.components.jsx"
import Social from "components/blocks/social.components.jsx"
import LogoName from 'assets/img/crest-name.svg'
import Logo from 'assets/img/token-web.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

class Index extends React.Component 
{
  constructor(props) 
  {
      super(props);

      this.state = 
      {
        width: window.innerWidth,
        isMobile: false

      };
      this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }

  UNSAFE_componentWillMount() 
  { 
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.state.width = document.documentElement.clientWidth
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile && this.state.width <= 1200) 
    {
      this.state.isMobile = true
      const root = document.getElementById('root');
      if (window.matchMedia("(orientation: landscape)").matches) root.style["height"] = "100vw"
      else root.style["height"] = "100vh"
    }
    this.forceUpdate()

    
  }
  componentWillUnmount() { window.removeEventListener('resize', this.handleWindowSizeChange); }
  handleWindowSizeChange(event) 
  { 
    this.state.width = document.documentElement.clientWidth
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile && this.state.width <= 1200) 
    {
      this.state.isMobile = true
      const root = document.getElementById('root');
      if (window.matchMedia("(orientation: landscape)").matches) root.style["height"] = "100vw"
      else root.style["height"] = "100vh"
    }
    else this.state.isMobile = false
    this.forceUpdate()
  }

  render()
    {
      const isMobile = this.state.width <= 1250;
      return(
        <div className="home p1">

          { this.state.isMobile != true ? <Navbar/> : <NavbarMobile/> }

          <div className="home-body flex column">

            <div className="home-body-base flex row">
              <div className="home-base-core flex column center">
                <div className="home-logo-core flex row">
                  <img className="home-logo" src={LogoName} alt={LogoName} />
                </div>
                <div className="home-title-core flex row">
                  <h1 className="home-title">COLLECT THEM ALL</h1>
                </div>
              </div>

              <div className="home-logo-icon flex row center">
                <video playsInline className="swap-video" autoPlay muted loop>
                  <source src={Logo} type="video/mp4" />
                </video>
              </div>
            </div>
            

            <div className="home-scroll-core flex row center">
              <div className="home-scroll flex row center">
                <a className="home-scroll-button flex row center" href="#badges">
                  <FontAwesomeIcon icon={faArrowDown} className="home-scroll-arrow"/>
                </a>
              </div>
            </div>
            

            <div className="home-background-p1">
              <div className="background-texture-p1"></div>
              <div className="background-rect-p1"></div>
              <div className="background-circle-p1"></div>
            </div>

            <div className="home-background-p2">
              <div className="background-texture-p2"></div>
              <div className="background-rect-p2"></div>
              <div className="background-circle-p2"></div>
            </div>
              
          </div>

          <Badges></Badges>
          <About></About>
          <Help></Help>
          <Roadmap></Roadmap>
          <Team></Team>
          <Social></Social>


        </div>

      )
    }
}

export default Index