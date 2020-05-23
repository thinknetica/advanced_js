/**
 * Создание списка
 * @param {string[]} list массив строк
 * @returns {HTMLUListElement} контейнер со списком
 */
function createList(list) {
    console.log(list);
    const ul = document.createElement('ul');
    ul.id = 'list';

    list.forEach(item => {
        const li = document.createElement('li');
        ul.append(li);

        const text = document.createTextNode(item);
        li.append(text);
    })

    return ul;
}

const arr = [
    'hello',
    'world',
    'it\'s',
    'me'
];

const body = document.body;

body.append(createList(arr));

const header = document.createElement('h1');
header.textContent = 'Simple list';
body.prepend(header);
