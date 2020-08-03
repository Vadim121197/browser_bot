'use strict';

const startChat = () => {
    const ruleMsg = 'Здраствуйте, меня зовут бот Петя, я в любое время могу закончить с Вами общение, если мне станет скучно с Вами, или если я встал с утра с левой ноги!) Если Вам захочеться покинуть нашу беседу, я буду только рад, то напишите - "Петя ты мне надоел"!';

    const parent = document.querySelector('.wrapper');
   
    parent.innerHTML = `<form>
    <div class="form-group">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="button" class="btn btn-outline-primary">Send</button>
</form>`;

    const parentDiv = createElement({ className: 'cards', parent: parent });

    document
        .querySelector('.btn')
        .addEventListener('click', handlerSendBtn.bind(null, parentDiv));

    createMsgBody('browserText', parentDiv, ruleMsg);
};

const handlerSendBtn = async (parent) => {
    const textArea = document.querySelector(".form-control");

    if (textArea.value === 'Петя ты мне надоел') {
        createMsgBody('myText', parent, textArea.value);
        createMsgBody('browserText', parent, 'Ты мне тоже надоел');
        textArea.value = '';
        document.querySelector(".btn").disabled = true;
    } else {
        createMsgBody('myText', parent, textArea.value);
        textArea.value = '';
        await chat('browserText', parent);
    }


};

const createMsgBody = (className, parent, text) => {
    const cardBodyText = `<div class="card-body">${text}</div>`;

    const div = createElement({
        className: `card ${className}`, parent: parent, html: cardBodyText
    });

    parent.insertBefore(div, parent.firstChild);

};

const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomMessage = async () => {
    const message = messages[rand(0, messages.length - 1)];
    const time = await rand(1, 5);

    if (message === messages[0]) {
        document.querySelector('.btn').disabled = true;
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
