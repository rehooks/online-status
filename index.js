"use strict";
let { useState, useEffect } = require("react");

function getOnlineStatus() {
  return typeof navigator !== "undefined" &&
    typeof navigator.onLine === "boolean"
    ? navigator.onLine
    : true;
}

function noop() {}

function useOnlineStatus({
  onStatusChange = noop,
  onOnline = noop,
  onOffline = noop
}) {
  let [onlineStatus, setOnlineStatus] = useState(getOnlineStatus());
  function goOnline() {
    onStatusChange(true);
    onOnline();
    setOnlineStatus(true);
  }
  function goOffline() {
    onStatusChange(false);
    onOffline();
    setOnlineStatus(false);
  }
  useEffect(() => {
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return onlineStatus;
}

module.exports = useOnlineStatus;
