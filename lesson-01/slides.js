// оператор if
{
    const answer = prompt('What the best language?', '');
    if (answer === 'js' || answer === 'javascript')
        alert('Good choose!');
    else if (answer === 'ts' || answer === 'typescript')
        alert('It\'s awesome choose!');
    else {
        alert('Oh...');
        alert('I don\'t know this language');
    }
}

// аналог с использованием тернарного оператора

{
    const answer = prompt('What the best language?', '');
    alert(answer === 'js' ? 'Good choose' : 'What is it?');
}

// оператор switch
{
    let answer = prompt('Lang?', 'ru');
    switch (answer) {
        case 'ru':
            alert('Привет!');
            break;
        case 'jp':
        case 'ch':
            alert('こんにちは');
            break;
        case 'en':
        default:
            alert('Hello!');
    }
}

// аналог c использованием if
{
    let answer = prompt('Lang?', 'ru');
    if (answer == 'ru')
        alert('Привет!');
    else if (answer == 'jp'
        || answer == 'ch')
        alert('こんにちは');
    else
        alert('Hello!');
}