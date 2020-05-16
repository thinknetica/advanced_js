// Шестнадцатиричный код AAAAAAAABBCDDDDDD
// A метка времени (timestamp в секундах)
// B кластер
// C тип
// D идентификатор пользователя
// Все входные данные - целые десятичные числа

parseId('5eabb7d03a854bdff');

function parseId(id) {
    console.log('parsings', id);
    const a = id.substr(0, 8);
    const timestamp = parseInt(a, 16);

    const b = id.substr(8, 2);
    const claster = parseInt(b, 16);

    const c = id.substr(10, 1);
    const type = parseInt(c, 16);

    const d = id.substr(11);
    const user = parseInt(d, 16);


    console.log(a, b, c, d);
    console.log('timestamp :', timestamp, new Date(timestamp * 1000));
    console.log('claster :', claster);
    console.log('type :', type);
    console.log('user :', user);
}