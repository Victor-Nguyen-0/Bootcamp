// console yummy if food is given, else console i'm hungry once
// ***** introduce a counter and then if counter = 0 can console I'm hungry

// function alwaysHungry(arr) {
//     let foodCount =0
//     for(let i=0; i<arr.length; i++) {
//         if (arr[i] == "food") {
//             console.log("yummy")
//             foodCount++
//         }
//     }
//     if(foodCount == 0) {
//         console.log("I'm hungry")
//     }
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"


// Return new away with cutoff value

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for(let i=0; i<arr.length; i++){
//         if (arr[i] > cutoff) {
//             filteredArr.push(arr[i])
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// return count of numbers larger than the average

// function betterThanAverage(arr) {
//     var sum = 0;
//     for(let i=0; i<arr.length; i++) {
//         sum +=arr[i]
//         // console.log(sum)
//     }
//     let average = sum/(arr.length)
//     var count = 0
//     for(let i=0; i<arr.length; i++) {
//         if (arr[i]>average) {
//             count++
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

//reverse values in an array and return

// function reverse(arr) {
//     let temp = []
//     for(let i=arr.length-1; i>=0; i--) {
//         temp.push(arr[i])
//     }
//     arr = temp
//     return arr;
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// fibonacci array - return array of fibonacci numbers up to given length n

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(let i=2; i<n; i++) {
        let temp = fibArr[i-2] + fibArr[i-1]
        fibArr.push(temp)
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
