// Remove Blanks
function removeBlanks(str) {
    newStr = "";
    for (let i = 0; i<str.length; i++) {
        if (str[i] != " ") {
            newStr += str[i];
        }
    }
    return newStr;
}

// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));


// Get Digits
function getDigits(str) {
    newStr = "";
    for (let i = 0; i<str.length; i++) {
        if (!isNaN(str[i])) {
            newStr += str[i];
        }
    }
    return newStr;
}

// console.log(getDigits("abc8c0d1ngd0j0!8f4134f213"));


// Acronyms
function acronym(str) {
    newStr = "";
    strArray = str.split(' ');
    for (let word in strArray) {
        if(strArray[word].length > 0) {
            newStr += strArray[word][0].toUpperCase()
        }
    }
    return newStr;
}

// console.log(acronym(" there's no free lunch - gotta pay yer way. "));


// Count Non-Spaces
function countNonSpaces(str) {
    count = 0;
    for (let i = 0; i<str.length; i++) {
        if (str[i] != " ") {
            count++;
        }
    }
    return count;
}

// console.log(countNonSpaces("Honey pie, you are driving me crazy"));


// Another for loop example for the above
function countNonSpaces2(str) {
    count = 0;
    for (let char in str) {
        if (str[char] != " ") {
            count++;
        }
    }
    return count;
}

// console.log(countNonSpaces("Honey pie, you are driving me crazy"));


// Remove Shorter Strings
function removeShorterStrings(arr, length) {
    let newStr = [];
    let nextIndex = 0;
    for (let value in arr) {
        if (arr[value].length >= length) {
            newStr[nextIndex++] = arr[value];
        }
    }
    return newStr;
}

// console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));