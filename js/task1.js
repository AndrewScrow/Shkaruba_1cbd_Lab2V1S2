function sumOfLast5PositiveNumbers(array) {
    let sum = 0;
    let positiveCount = 0;

    for (let i = array.length - 1; i >= 0 && positiveCount < 5; i--){
        if (array[i] > 0) {
            sum += array[i];
            positiveCount++;
        }
    }
    return sum;
}

//let array = [3, -1, 4, 7, -2, 5, 8, -3, 6, -4, 9];
let array = Array.from({length: 15}, () =>Math.floor(Math.random() * 100));
console.log('Масив:', array);
let sum = sumOfLast5PositiveNumbers(array);
console.log("Сума останніх 5 додатніх елементів: " + sum);