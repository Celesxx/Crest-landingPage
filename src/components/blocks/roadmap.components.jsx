import 'assets/css/pages/global.assets.css';
import 'assets/css/pages/index.assets.css';
import 'assets/css/blocks/roadmap.assets.css';
import 'assets/css/blocks/mobile/roadmapMobile.assets.css';
import React from "react";
import AmethystGrey from "assets/img/amethyst-grey.png"

class Roadmap extends React.Component 
{
  render()
    {
      return(
        <div className="home roadmap-core flex column center">
          
            <div className="roadmap-head-core flex column center">
                <h1 className="roadmap-title">{`Our vision`}</h1>
                <p className="roadmap-desc">Here is a list of improvements we are looking on non stop</p>
            </div>

            <div className="roadmap-content-core flex column center">

                <div className="roadmap-content flex column">
                    <h2 className="roadmap-content-title">Lore development</h2>
                    <p className="roadmap-content-desc">We want to create a <span className="text-pink">real story</span> around our crystals to make them <span className="text-pink">truly unique</span> ! A story that we will develop little by little with our weekly updates and all the features we will work on in the future</p>
                </div>

                <div className="roadmap-content flex column">
                    <h2 className="roadmap-content-title">Feature</h2>
                    <p className="roadmap-content-desc">Innovate every day by developing new <span className="text-pink">exclusive aspects</span> in the world of DeFi thanks to our future updates that will arrive periodically and thus make your experience the most unique possible</p>
                </div>

                <div className="roadmap-content flex column">
                    <h2 className="roadmap-content-title">Community</h2>
                    <p className="roadmap-content-desc">We want to develop the community in an <span className="text-pink">authentic and original</span> way and make it the main factor of success of the project, that's why we will always listen to you</p>
                </div>

            </div>

            <div className="roadmap-badges-grey">
                <img className="roadmap-badges-img" src={AmethystGrey} alt={AmethystGrey} />  
            </div>  

        </div>
      );
    }
}

export default Roadmap;
