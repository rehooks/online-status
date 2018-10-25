"use strict";
let { useState, useEffect } = require("react");

function getOnlineStatus() {
  return typeof navigator !== "undefined" &&
    typeof navigator.onLine === "boolean"
    ? navigator.onLine
    : true;
}

function useOnlineStatus() {
  let [onlineStatus, setOnlineStatus] = useState(getOnlineStatus());
  function goOnline() {
    setOnlineStatus(true);
  }
  function goOffline() {
    setOnlineStatus(false);
  }
  useEffect(() => {
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  });

  return onlineStatus;
}

module.exports = useOnlineStatus;
