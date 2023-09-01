let screen = document.getElementById('result');
let history = [];

function appendToScreen(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
    history = [];
}

function backspace() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    let expression = screen.value;
    if (expression) {
        let result = eval(expression);
        screen.value = result;
        history.push({expression, result});
    }
}
