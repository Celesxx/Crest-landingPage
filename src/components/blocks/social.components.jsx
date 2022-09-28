import 'assets/css/pages/global.assets.css';
import 'assets/css/pages/index.assets.css';
import 'assets/css/blocks/social.assets.css';
import 'assets/css/blocks/mobile/socialMobile.assets.css';
import React from "react";
import Twitter from "assets/img/twitter.png"
import Medium from "assets/img/medium.png"
import Discord from "assets/img/discord.png"

class Social extends React.Component 
{
  render()
    {
      return(
        <div className="home home-social flex column center">
          
            <div className="social-content-head flex column center">
                <h1 className="social-title">Socials</h1>
                <p className="social-desc">To finish, here are the different ways to join us so don't waste another minute and join the CREST family now!</p>
            </div>

            <div className="social-content-link flex row center">
                <a href="https://twitter.com/playCrest" className="social-link flex row center "><img className="social-img" src={Twitter} alt={Twitter} /> </a>
                <a href="https://medium.com/@playCrest" className="social-link flex row center"><img className="social-img" src={Medium} alt={Medium} /></a>
                <a href="https://discord.com/invite/mUHGNqN8Vj" className="social-link flex row center"><img className="social-img" src={Discord} alt={Discord} /></a>
            </div>

        </div>
      );
    }
}

export default Social;
