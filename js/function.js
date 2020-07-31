'use strict';

const startChat = () => {
    const parent = document.querySelector('.wrapper');
    parent.innerHTML = `<form>
    <div class="form-group">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="button" class="btn btn-outline-primary">Send</button>
</form>`;

    document.querySelector('.btn').addEventListener('click', handlerSendBtn.bind(null, parent));
};


const handlerSendBtn = (parent) => {
    const textArea = document.querySelector('.form-control');

    createMsgBody('myText', textArea.value, parent);


    setTimeout(createMsgBody, 2000, 'browserText', 'what?', parent)
}


const createMsgBody = (className, text, parent) => {
    const div = document.createElement('div');
    div.classList.add('card', className);
    parent.appendChild(div);

    div.innerHTML += `
    <div class="card-body">
        ${text}
    </div>`;
}