"use strict";

const startChat = () => {
  const parent = document.querySelector(".wrapper");
  parent.innerHTML = `<form>
    <div class="form-group">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="button" class="btn btn-outline-primary">Send</button>
</form>`;

  document
    .querySelector(".btn")
    .addEventListener("click", handlerSendBtn.bind(null, parent));
};

const handlerSendBtn = async (parent) => {
  const textArea = document.querySelector(".form-control");

  if (textArea.value === "1") {
    document.querySelector(".btn").disabled = true;
    createMsgBody("myText", parent, textArea.value);
    await chat("browserText", parent);
  } else {
    createMsgBody("myText", parent, textArea.value);

    await chat("browserText", parent);
  }
};

const createMsgBody = (className, parent, text) => {
  const parentDiv = document.createElement("div");
  parent.appendChild(parentDiv);

  const div = document.createElement("div");
  div.classList.add("card", className);
  //   parentDiv.appendChild(div);
  parentDiv.insertBefore(div, div.previousSibling);
  div.innerHTML = `
    <div class="card-body">
        ${text}
    </div>`;
};

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomMessage = async () => {
  const messages = ["Привет", "Куда пропал?", "Давно не виделись"];
  const message = messages[rand(0, messages.length - 1)];
  const time = await rand(1, 5);
  if (message === "Привет") {
    document.querySelector(".btn").disabled = true;
    return timeout(message, time);
  }

  return timeout(message, time);
};

const timeout = (message, time) => {
  return new Promise((done) => {
    setTimeout(() => done(message), time * 1000);
  });
};

const chat = async (className, parent) => {
  const message = await randomMessage();
  createMsgBody(className, parent, message);
};
