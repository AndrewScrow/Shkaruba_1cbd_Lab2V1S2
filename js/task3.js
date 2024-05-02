// function calculateArrayLength(array){
//     if (Array.isArray(array)){
//         return array.length;
//     } else {
//         console.log("Помилка: переданий аргумент не є масивом.");
//         return null;
//     }
// }
let arr = [1, 2, 3, 4, 5];
n = 0;
while (true){
    // try {
    //     arr[n];
        
    // }
    // catch (err){
    //     n++;
    //     break;
    // }
    if(arr[n]===undefined){
    break;
}
else{
    n++;
}
}

console.log("Довжина масиву: " + n)
// let length = calculateArrayLength(arr);
// if (length !== null) {
    
// }
