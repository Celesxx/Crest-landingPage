import 'assets/css/pages/global.assets.css';
import 'assets/css/pages/index.assets.css';
import 'assets/css/blocks/help.assets.css';
import 'assets/css/blocks/mobile/helpMobile.assets.css';
import React from "react";

class Help extends React.Component 
{
  render()
    {
      return(
        <div className="home flex column center">
          
            <div className="help-head-core flex column center">
                <h1 className="help-title">How to ?</h1>
                <p className="help-desc">A short schema to explain the differents steps to get and buy your first badges !</p>
            </div>

            <div className="help-content-core flex column center">

                <div className="help-content flex row center">
                    <h2 className="help-content-title help-title-right">Connect Wallet</h2>
                    <div className="help-content-bullet bullet-p1"></div>
                    <div className="help-content-border flex row left">
                        <div className="help-content-border-p1"> </div>
                    </div>
                </div>

                <div className="help-content flex row center">
                    <div className="help-content-border flex row right">
                        <div className="help-content-border-p2"> </div>
                    </div>
                    <div className="help-content-bullet bullet-p2"></div>
                    <h2 className="help-content-title help-title-left">{`Swap $USDC -> $CREST`}</h2>
                </div>

                <div className="help-content flex row center">
                    <h2 className="help-content-title help-title-right">Buy your badges</h2>
                    <div className="help-content-bullet bullet-p3"></div>
                    <div className="help-content-border flex row left">
                        <div className="help-content-border-p3"> </div>
                    </div>
                </div>
                
                <div className="help-content flex row center">
                    <div className="help-content-border flex row right">
                        <div className="help-content-border-p4"> </div>
                    </div>
                    <div className="help-content-bullet bullet-p4"></div>
                    <h2 className="help-content-title help-title-left">Buy your badges</h2>
                </div>

                <div className="help-content-p1">
                    <h2 className="help-content-title">Collect your $CREST</h2>
                </div>

            </div>

        </div>
      );
    }
}

export default Help;
