import 'assets/css/pages/global.assets.css';
import 'assets/css/pages/index.assets.css';
import 'assets/css/blocks/about.assets.css';
import 'assets/css/blocks/mobile/aboutMobile.assets.css';
import React from "react";
import RealYield from "assets/img/real-yield.png"
import Burn from "assets/img/burn.png"
import Liquidity from "assets/img/liquidity.png"
import AmberGrey from "assets/img/amber-grey.png"
class About extends React.Component 
{
  render()
    {
      return(
        <div className="home home-about flex column center">
          
          <div className="about-card-core flex row">
            <div className="about-card-head about-card-head-start flex column">
                <h1 className="about-card-title">Real Yield</h1>
                <p className="about-card-desc">Develop our secure investment strategy to guarantee yours so that you can generate more revenue than emissions and thus generate profits.</p>
            </div>
            <div className="about-card-img flex row center">
                <img className="card-img" src={RealYield} alt={RealYield}></img>
            </div>
          </div>

          <div className="about-card-core flex row">
            <div className="about-card-img flex row center">
                <img className="card-img" src={Liquidity} alt={Liquidity}></img>
            </div>
            <div className="about-card-head about-card-head-end flex column">
                <h1 className="about-card-title about-end">Liquidity Manager</h1>
                <p className="about-card-desc about-end">Manage your tokens with total control to allow you to establish the best strategy and obtain a safe stability throughout your adventure.</p>
            </div>
          </div>

          <div className="about-card-core flex row">
            <div className="about-card-head about-card-head-start flex column">
                <h1 className="about-card-title">Burn Mechanism</h1>
                <p className="about-card-desc">The burn mechanism will push the economic model into a long-term deflationary path to increase the scarcity of the $CREST token and thus ensure long-term stability</p>
            </div>
            <div className="about-card-img flex row center">
                <img className="card-img" src={Burn} alt={Burn}></img>
            </div>
          </div>

          <div className="about-badges-grey">
            <img className="about-badges-img" src={AmberGrey} alt={AmberGrey} />  
          </div>          

        </div>
      );
    }
}

export default About;
