# `@rehooks/online-status`

> React hook for subscribing to `online`/`offline` events and the `navigator.onLine` property to see current status

> You'll need to install `react`, `react-dom`, etc at `^16.8.4`

## Install

```sh
yarn add @rehooks/online-status
```

## Usage

```js
import useOnlineStatus from '@rehooks/online-status';

function MyComponent() {
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <h1>You are {onlineStatus ? "Online" : "Offline"}</h1>
    </div>
  );
}
```
