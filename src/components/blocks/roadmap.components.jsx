import 'assets/css/pages/global.assets.css';
import 'assets/css/pages/index.assets.css';
import 'assets/css/blocks/roadmap.assets.css';
import 'assets/css/blocks/mobile/roadmapMobile.assets.css';
import React from "react";

class Roadmap extends React.Component 
{
  render()
    {
      return(
        <div className="home roadmap-core flex column center">
          
            <div className="roadmap-head-core flex column center">
                <h1 className="roadmap-title">{`Roadmap & our vision`}</h1>
                <p className="roadmap-desc">Here is a list of goals that we would like to accomplish, they represent the direction we want to follow</p>
            </div>

            <div className="roadmap-content-core flex column center">

                <div className="roadmap-content flex column">
                    <h2 className="roadmap-content-title">Lore developpement</h2>
                    <p className="roadmap-content-desc">Here is a list of goals that we would like to <span className="text-pink">accomplish</span>, they represent the direction we want to follow</p>
                </div>

                <div className="roadmap-content flex column">
                    <h2 className="roadmap-content-title">Feature</h2>
                    <p className="roadmap-content-desc">Here is a <span className="text-pink">list</span> of goals that we would like to accomplish, they represent the direction we want to follow</p>
                </div>

                <div className="roadmap-content flex column">
                    <h2 className="roadmap-content-title">Community</h2>
                    <p className="roadmap-content-desc">Here is a list of goals that <span className="text-pink">we would like</span> to accomplish, they represent the direction we want to follow</p>
                </div>

                <div className="roadmap-content flex column">
                    <h2 className="roadmap-content-title">MultiChain Dex</h2>
                    <p className="roadmap-content-desc">Here is a list of <span className="text-pink">goals</span> that we would like to accomplish, they represent the direction we want to follow</p>
                </div>

                <div className="roadmap-content flex column">
                    <h2 className="roadmap-content-title">Crest Game</h2>
                    <p className="roadmap-content-desc">Here is a list of goals that we would like to accomplish, they represent the <span className="text-pink">direction</span> we want to follow</p>
                </div>
            </div>

        </div>
      );
    }
}

export default Roadmap;
