import { initEmojis } from "./emoji.js";

const sendBtn = document.querySelector(".send");
const textInput = document.querySelector("#words");
const textWritten = document.querySelector("#written-text");
const emojiBtn = document.querySelector(".trigger");
const warningMsg = document.querySelector(".message");

initEmojis();

let functionCalls = 0;

function sendText() {
  if (textInput.value.length < 30) {
    warningMsg.textContent = "Your text should be at least 30 characters long";
    warningMsg.classList.toggle("warning");
    warning();
    return;
  }
  if (textInput.value.length > 50) {
    warningMsg.textContent = "Your text should be less than 50 characters long";
    warningMsg.classList.toggle("warning");
    warning();
    return;
  }
  if (textWritten.textContent === "") {
    textWritten.textContent += textInput.value;
    hideText();
    let start = revealLastWord();
    functionCalls++;
    return (textInput.value = `${start}`);
  } else {
    let string = textInput.value.split(" ");
    let firstWord = string.splice(0, 3);
    let withoutFirstWord = string.join(" ");
    textWritten.textContent += ` ${withoutFirstWord}`;
    hideText();
    let start = revealLastWord();
    functionCalls++;
    console.log(functionCalls);
    if (functionCalls === 9) {
      changeButton();
      return (textInput.value = `${start}`);
    } else if (functionCalls === 10) {
      removeInputs();
      return revealText();
    } else {
      return (textInput.value = `${start}`);
    }
  }
}

function hideText() {
  textWritten.classList.add("hidden-text");
}

function revealLastWord() {
  let string = textInput.value.split(" ");
  let lastWords =
    string[string.length - 3] +
    " " +
    string[string.length - 2] +
    " " +
    string[string.length - 1] +
    " ";
  return lastWords;
}

function changeButton() {
  sendBtn.value = "REVEAL";
  sendBtn.classList.toggle("reveal");
}

function removeInputs() {
  sendBtn.remove();
  textInput.remove();
  emojiBtn.remove();
  // sendBtn.onclick = location.reload();
}

function revealText() {
  textWritten.classList.remove("hidden-text");
}

sendBtn.onclick = sendText;

textInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendBtn.click();
  }
});

function warning() {
  setTimeout(() => {
    warningMsg.classList.toggle("warning");
  }, 3000);
}

var musicHome = document.getElementsById("musicHome");
musicHome.play();

// textInput.onkeydown = () => {
//   removeEmojis(textInput.value);
// };
