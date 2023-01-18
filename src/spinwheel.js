import "./styles.css";
import React from "react";
import WheelComponent from "react-wheel-of-prizes";
import Login from "./login/login";
import Logout from "./login/logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";
const clientId = '20124901378-pt60prpd3bkipmc9rvnf75tt5sdioe67.apps.googleusercontent.com';


function SpinWheel() {

    useEffect(() => {
        function start(){
          gapi.client.init({
            clientId: clientId,
            scope: ""
          })
        };
        gapi.load('client:auth2', start)
      });
  
  const segments = [
    "100 coins",
    "200 coins",
    "300 coins",
    "500 coins",
    "700 coins",
    "900 coins",
    "1000 coins"
  ];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F","#F0CF50"];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (



  <div className="App">
    <div className="App">
      <Login/>
      <Logout/>
    </div>
 

      <h1>Spine Wheel and Collect your prize</h1>
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
export default SpinWheel;
