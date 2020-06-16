function search(arr, n) {
    let mid = parseInt(arr.length / 2);
    while (mid < arr.length) {
        if (arr[mid] === n) {
            return mid
        } else if (mid < 0 | mid > arr.length) {
            return -1
        } else if (arr[mid] > n) {
            if (arr[mid - 1] < n) {
                return -1
            } else {
                mid--
            }
        } else if (arr[mid] < n) {
            if (arr[mid + 1] > n) {
                return -1
            } else {
                mid++
            }
        }
    }
    return -1
}

console.log(search([1, 3, 10, 14, 39], 14))
console.log(search([1, 3, 10, 14, 39], 299))
console.log(search([1, 3, 10, 14, 39], 11))
