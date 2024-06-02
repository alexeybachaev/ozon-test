import { ProgressBar } from "./src/Components/Progressbar/ProgressBar.js";

const root = document.querySelector("#root");
if (!root) {
  throw new Error("root element not found");
}

const progressBar = new ProgressBar(root, "Progress", {
  value: 20,
  isAnimated: false,
  isHidden: false,
});
