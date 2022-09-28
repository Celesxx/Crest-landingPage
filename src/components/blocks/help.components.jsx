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
                <h1 className="help-title">How to play</h1>
                <p className="help-desc">Having trouble getting started on your new adventure? Don't worry, everything is fine! Here's a little diagram that should teach you the basics</p>
            </div>

            <div className="help-content-core flex column center">

                <div className="help-content flex row center">
                    <div className="help-content-title-core flex help-title-right">
                        <h2 className="help-content-title flex help-border-p1 row center">Launch dApp</h2>
                    </div>
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
                    <div className="help-content-title-core flex help-title-left">
                        <h2 className="help-content-title flex help-border-p2 row center">Connect Wallet</h2>
                    </div>
                </div>

                <div className="help-content flex row center">
                    <div className="help-content-title-core flex help-title-right">
                        <h2 className="help-content-title flex help-border-p3 row center">{`Swap $USDC -> $CREST`}</h2>
                    </div>
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
                    <div className="help-content-title-core flex help-title-left">
                        <h2 className="help-content-title flex help-border-p4 row center">Buy your badges</h2>
                    </div>
                </div>

                <div className="help-content flex center">
                    <div className="help-content-title-core help-content-title-core-end flex">
                        <h2 className="help-content-title flex help-border-p5 row center">Collect your $CREST</h2>
                    </div>
                </div>

            </div>

        </div>
      );
    }
}

export default Help;
