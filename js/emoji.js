import { EmojiButton } from "./emoji.lib.js";

const textInput = document.querySelector("#words");

export function initEmojis() {
  const picker = new EmojiButton();
  const trigger = document.querySelector(".trigger");

  picker.on("emoji", (selection) => {
    textInput.value += selection.emoji;
    console.log(selection);
  });

  trigger.addEventListener("click", () => picker.togglePicker(trigger));
}
