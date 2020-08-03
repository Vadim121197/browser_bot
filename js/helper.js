'use strict';

const createElement = function ({
    attrs = {},
    styles = {},
    handlers = {},
    data = {},
    type = "div",
    text,
    html,
    className,
    parent,
    id,
}) {
    const element = document.createElement(type);

    for (const attr in attrs) {
        element[attr] = attrs[attr];
    }

    for (const style in styles) {
        element.style[style] = styles[style];
    }

    for (const handler in handlers) {
        element.addEventListener(handler, handlers[handler].bind(element));
    }

    for (const attr in data) {
        element.dataset[attr] = data[attr];
    }

    if (id) element.id = id;
    if (className) element.className = className;
    if (text) element.innerText = text;
    if (html) element.innerHTML = html;
    if (parent) parent.appendChild(element);

    return element;
};