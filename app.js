import { createRoot, render } from "./src/components/renderer";

let store = {};

const $root = document.getElementById("root");
const nodeObject = (state) => ({
  state: {},
  type: "div",
  props: {
    children: [
      {
        type: "input",
        props: {
          className: "input",
          value: state.value,
        },
      },
      {
        type: "button",
        props: {
          text: "change",
          onClick: function (e) {
            store.value = "its ok";

            render(nodeObject, $root, store);
          },
        },
      },
      {
        type: "section",
        props: {
          children: [
            {
              type: "p",
              props: {
                text: "some text",
              },
            },
          ],
        },
      },
    ],
    className: "container",
  },
});

createRoot(nodeObject, $root, store);
