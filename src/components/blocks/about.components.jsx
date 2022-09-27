import 'assets/css/pages/global.assets.css';
import 'assets/css/pages/index.assets.css';
import 'assets/css/blocks/about.assets.css';
import 'assets/css/blocks/mobile/aboutMobile.assets.css';
import React from "react";
import RealYield from "assets/img/real-yield.png"
import Burn from "assets/img/burn.png"
import Liquidity from "assets/img/liquidity.png"

class About extends React.Component 
{
  render()
    {
      return(
        <div className="home home-about flex column center">
          
          <div className="about-card-core flex row">
            <div className="about-card-head flex column">
                <h1 className="about-card-title">Real Yield</h1>
                <p className="about-card-desc">REAL YIELD Being a Real Yield protocol can guarantee everyone's benefits. That's why we worked on a realistic plan to achieve our goals. The following mechanics will be available from day one.</p>
            </div>
            <div className="about-card-img flex row center">
                <img className="card-img" src={RealYield} alt={RealYield}></img>
            </div>
          </div>

          <div className="about-card-core flex row">
            <div className="about-card-img flex row center">
                <img className="card-img" src={Liquidity} alt={Liquidity}></img>
            </div>
            <div className="about-card-head flex column">
                <h1 className="about-card-title about-end">Liquidity Manager</h1>
                <p className="about-card-desc about-end">LIQUIDITY MANAGER A Liquidity Manager is a must-have for sustainability, that's why we implemented it in our protocol.</p>
            </div>
          </div>

          <div className="about-card-core flex row">
            <div className="about-card-head flex column">
                <h1 className="about-card-title">Burn Mechanism</h1>
                <p className="about-card-desc">BURN MECHANISM We implemented burn mechanisms to increase $CREST scarcity in the long run and here is how it works.</p>
            </div>
            <div className="about-card-img flex row center">
                <img className="card-img" src={Burn} alt={Burn}></img>
            </div>
          </div>

          

        </div>
      );
    }
}

export default About;
