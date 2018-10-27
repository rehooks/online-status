import React from "react";
import { render } from "react-dom";

import useOnlineStatus from "./";

function App() {
  let onlineStatus = useOnlineStatus({
    onStatusChange: online =>
      online
        ? console.log("You are now online")
        : console.log("you are now offline")
  });
  return (
    <div>
      <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
    </div>
  );
}

render(<App />, window.root);
