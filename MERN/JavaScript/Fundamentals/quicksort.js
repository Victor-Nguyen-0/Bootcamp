// Hoare’s partitioning algorithm

function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    const pivot = arr[Math.round(Math.random()*(arr.length - 1))];
    const index = partitionHoares(arr, left, right, pivot);
    quicksort(arr, left, index - 1);
    quicksort(arr, index, right);
    return arr;
} 

function partitionHoares(arr, left, right, pivot) {
    while (left <= right) {
        while (arr[left] < pivot && left <= right) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return left;
}


let arr = [9, 4, 1, 6, 7, 3, 8, 2, 5];
console.log(quicksort(arr))
