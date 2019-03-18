"use strict";

const test = require("ava");
const { createElement: h } = require("react");
const ReactTestRenderer = require("react-test-renderer");
const useOnlineStatus = require("../src");

function render(val) {
  return ReactTestRenderer.create(val);
}

test('it should render value from useOnlineStatus hooks:', t => {
  function Component() {
    const value = useOnlineStatus();
    return h("div", { value });
  }

  const input = render(h(Component));

  t.is(input.toJSON().props.value, true);
});
