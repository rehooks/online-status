import React from "react";
import { render } from "react-dom";
import { toaster } from "evergreen-ui";

import useOnlineStatus from "./";

function App() {
  let onlineStatus = useOnlineStatus({
    onStatusChange: online =>
      online
        ? toaster.success("You are now online")
        : toaster.danger("you are now offline")
  });
  return (
    <div>
      <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
    </div>
  );
}

render(<App />, window.root);
