import React from "react";
import { render } from "react-dom";
import useOfflineStatus from "./";

function App() {
  let onlineStatus = useOfflineStatus();
  return (
    <div>
      <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
    </div>
  );
}

render(<App />, window.root);
