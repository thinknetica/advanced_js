// append from template
const template = document.getElementById('template');

console.log(template);

const copy = template.content.cloneNode(true);
const container = document.getElementById('container');
container.append(copy);

// saving

let saved = null;

function remove() {
    saved = container.firstElementChild;
    console.log(container.firstElementChild.remove());
}

function revert() {
    container.append(saved);
}

// hidden

function toggelHidden() {
    container.hidden = !container.hidden;
}