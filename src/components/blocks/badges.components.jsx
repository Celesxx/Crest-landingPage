import 'assets/css/pages/global.assets.css';
import 'assets/css/pages/index.assets.css';
import 'assets/css/blocks/badges.assets.css';
import 'assets/css/blocks/mobile/badgesMobile.assets.css';
import React from "react";
import Ruby from "assets/img/ruby.mp4"
import Amber from "assets/img/amber.mp4"
import Amethyst from "assets/img/amethyst.mp4"

class Cards extends React.Component 
{
    constructor(props) 
    {
        super(props);
  
        this.state = 
        {
          width: window.innerWidth,
        };
  
    }
  
    UNSAFE_componentWillMount() { window.addEventListener('resize', this.handleWindowSizeChange); }
    componentWillUnmount() { window.removeEventListener('resize', this.handleWindowSizeChange); }
    
    handleWindowSizeChange = () => { this.state.width = window.innerWidth };
  
    render()
    {
        const isMobile = this.state.width <= 660;
        return(
            <div className="home home-badges flex column center p2" id="badges">
                
                <div className="badges-head-core flex row center">
                    <div className="badges-head flex column center">
                        <h1 className="badges-title">Our badges</h1>
                        <p className="badges-desc">Discover the intense brilliance hidden in these crystals that even the darkness cannot hide, allowing to transcend to a higher level its possessor</p>
                        </div>
                </div>

                <div className="badges-cards-core flex row">


                    <div className="badges-card flex column center">
                        <h1 className="badges-card-title">Amethyst</h1>
                        <p className="badges-card-desc">A stone filled with one of the four primordial elements</p>
                        <video playsInline className="badges-video" autoPlay muted loop>
                            <source src={Amethyst} type="video/mp4" />
                        </video>
                    </div>


                    <div className="badges-card flex column center badges-middle">
                        <h1 className="badges-card-title">Ruby</h1>
                        <p className="badges-card-desc">A stone filled of the blood of the ancients ods gods</p>
                        <video playsInline className="badges-video" autoPlay muted loop>
                            <source src={Ruby} type="video/mp4" />
                        </video>
                    </div>


                    <div className="badges-card flex column center">
                        <h1 className="badges-card-title">Amber</h1>
                        <p className="badges-card-desc">A stone containing the light of a dying sun</p>
                        <video playsInline className="badges-video" autoPlay muted loop>
                            <source src={Amber} type="video/mp4" />
                        </video>
                    </div>  
                    

                </div>

                    
            </div>
        );
    }
}

export default Cards;
