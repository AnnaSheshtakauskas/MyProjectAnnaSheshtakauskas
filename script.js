console.log('Hello, World')

// Функция для проверки четности числа
function checkEvenOdd() {
    // Запросить у пользователя ввод числа
    let userInput = prompt("Введите любое число:");

    // Преобразовать ввод в число
    let number = parseInt(userInput);

    // Проверка на корректность ввода
    if (isNaN(number)) {
        alert("Пожалуйста, введите действительное число.");
        return;
    }

    // Проверка четности
    if (number % 2 === 0) {
        alert(`${number} является четным числом.`);
    } else {
        alert(`${number} является нечетным числом.`);
    }
}

// Вызов функции
checkEvenOdd();