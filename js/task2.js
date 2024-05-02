function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let number = parseInt(prompt("Введіть число для обчислення факторіала:"));
if (!isNaN(number) && number >= 0 && Number.isInteger(number)){
    let result = factorial(number);
    console.log("Факторіал числа: " + number + " дорівнює: "  + result );
} else {
    console.log("Будь ласка, введіть невід'ємне число.");
}