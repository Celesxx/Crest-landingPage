import 'assets/css/pages/global.assets.css';
import 'assets/css/pages/index.assets.css';
import 'assets/css/blocks/team.assets.css';
import 'assets/css/blocks/mobile/teamMobile.assets.css';
import React from "react";
import Xina from "assets/img/xina.jpeg"
import Celes from "assets/img/celes.jpg"
import Ender from "assets/img/ender.png"
import Ocio from "assets/img/ocio.png"
import Numa from "assets/img/numa.png"

class Roadmap extends React.Component 
{
  render()
    {
      return(
        <div className="home team-core flex column center">
          
            <div className="team-head-core flex column center">
                <h1 className="team-title">Our team !</h1>
                <p className="team-desc">This is all the Core Team members of Crest, a group of 5 hard workers that complement each other in all the skills that make a protocol be successful</p>
            </div>

            <div className="team-content-core flex row">

                <div className="team-content flex column">
                    <img className="team-content-img" src={Xina} alt={Xina} />
                    <h2 className="team-content-title"><span className="text-pink">Xina</span></h2>
                    <p className="team-content-desc">Marketing</p>
                </div>

                <div className="team-content flex column">
                    <img className="team-content-img" src={Celes} alt={Celes} />
                    <h2 className="team-content-title"><span className="text-pink">Celes</span></h2>
                    <p className="team-content-desc">Full Stack developper</p>
                </div>

                <div className="team-content flex column">
                    <img className="team-content-img" src={Ender} alt={Ender} />
                    <h2 className="team-content-title"><span className="text-pink">Ender</span></h2>
                    <p className="team-content-desc">Communication</p>
                </div>

                <div className="team-content flex column">
                    <img className="team-content-img ocio-img" src={Ocio} alt={Ocio} />
                    <h2 className="team-content-title"><span className="text-pink">Ocio</span></h2>
                    <p className="team-content-desc">Solidity Developper</p>
                </div>

                <div className="team-content flex column">
                    <img className="team-content-img" src={Numa} alt={Numa} />
                    <h2 className="team-content-title"><span className="text-pink">Numa</span></h2>
                    <p className="team-content-desc">Art direction</p>
                </div>

            </div>

        </div>
      );
    }
}

export default Roadmap;
