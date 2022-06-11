// Push Front - built-in methods
function pushFront(arr, num) {
    arr.unshift(num);
    return arr;
}

// test =  pushFront([1,2,3], 45);
// console.log(test);


// Push Front - no built-ins, push
function pushFront2(arr, num) {
    arr2 = [];
    arr2.push(num);
    for (let i = 0 ; i <= arr.length; i++) {
        arr2.push[arr[i]];
    }
    return arr2;
}

// test =  pushFront([1,2,3], 45);
// console.log(test);


// Push Front - no built-ins, no push
function pushFront3(arr, num) {
    for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = num;
    return arr;
}

// test =  pushFront([1,2,3,4], 45);
// console.log(test);


// Pop Front - built-ins
function popFront(arr) {
    frontNum = arr.shift(arr[0]);
    console.log("The previous array is now:", arr);
    return frontNum;
}

// test = popFront([1,2,3]);
// console.log(test);


// Pop Front - no built-ins, pop
function popFront2(arr) {
    temp = []
    frontNum = arr[0]
    for (let i = arr.length-1; i>=0; i--) {
        temp.push(arr[i]);
    }
    temp.pop();
    temp2 = []
    for (let i = temp.length-1; i>=0; i--) {
        temp2.push(temp[i])
    }
    arr = temp2;
    console.log(arr);
    return frontNum;
}

// test = popFront2([1,2,3]);
// console.log(test);



// Pop Front - no built-ins, no pop
function popFront3(arr) {
    frontNum = arr[0];
    for (let i = 0; i<arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length -1
    console.log("The resulting array is: ", arr);
    return frontNum;
}

// test = popFront3([1,2,3,4,5]);
// console.log(test);


// Insert At - built-ins
function insertAt(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}

// test = insertAt([1,2,3,4], 2, 55)
// console.log(test);


// Insert At - no built-ins, push
function insertAt2(arr, index, value) {
    temp = [];
    for (let i = 0; i<index; i++) {
        temp.push(arr[i]);
    }
    temp.push(value);
    for(let i = index; i<arr.length; i++) {
        temp.push(arr[i]);
    }
    arr = temp;
    return arr;
}

// test = insertAt2([1,2,3,4], 2, 55)
// console.log(test);


// Insert At - no built-ins, no push
function insertAt3(arr, index, value) {
    for (let i = arr.length; i >= index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = value;
    return arr;
}

// test = insertAt3([1,2,3,4], 2, 55)
// console.log(test);

// Remove At - built-ins
function removeAt(arr, index) {
    newArr = arr.splice(index, 1);
    console.log("The previous array is now:", arr);
    return newArr[0];
}

// test = removeAt([1,2,3,4], 2);
// console.log(test);


// Remove At - no built-ins, push
function removeAt2(arr, index) {
    temp = []
    for (let i = 0; i < arr.length; i++) {
        if (i == index) {
            continue;
        }
        else {
            temp.push(arr[i]);
        }
    }
    arr = temp;
    return arr;
}

// test = removeAt2([1,2,3,4], 2);
// console.log(test);


// Remove At - no built-ins, no pop
function removeAt3(arr, index) {
    temp = [];
    for (let i = 0; i < index; i++) {
        temp[i] = arr[i];
    }
    for (let i = index+1; i<arr.length; i++) {
        temp[i-1] = arr[i];
    }
    arr = temp;
    return arr;
}

// test = removeAt3([1,2,3,4,5,6,7,8,9], 5);
// console.log(test);

// Swap Pairs --> looks like split array into pairs --> swap pair values
function swapPairs(arr) {
    temp = [];
    if (arr.length%2 == 0) {
        for (let i = 0; i<arr.length; i = i + 2) {
            temp.push(arr[i+1]);
            temp.push(arr[i]);
        }
        arr = temp;
        return arr;
    }
    else {
        for (let i = 0; i<arr.length-1; i = i + 2) {
            temp.push(arr[i+1]);
            temp.push(arr[i]);
        }
        temp.push(arr[arr.length-1]);
        arr = temp;
        return arr;
    }
}

// test = swapPairs([1,2,3,4,5,6,7,8])
// console.log(test);


// Remove Duplicates - given a sorted array
function removeDuplicate(arr) {
    temp = [];
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] != arr[i+1]) {
            temp.push(arr[i]);
        }
        else {
            continue
        }
    }
    arr = temp;
    return arr;
}

// test = removeDuplicate([1,2,2,3,4,5,5,6,7,8,8]);
// console.log(test);