"use strict";
let test = require("ava");
let { createElement: h } = require("react");
let ReactTestRenderer = require("react-test-renderer");
let useOnlineStatus = require("./");

function render(val) {
  return ReactTestRenderer.create(val);
}

test(t => {
  function Component() {
    let value = useOnlineStatus();
    return h("div", { value });
  }

  let input = render(h(Component));

  t.is(input.toJSON().props.value, true);
});
