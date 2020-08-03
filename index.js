function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(firstArray, secondArray) {
    let newArr = []
    while (firstArray.length !== 0 && secondArray.length !== 0) {
        if (firstArray[0] <= secondArray[0]) {
            newArr.push(findMinAndRemoveSorted(firstArray))
        }
        else {
            newArr.push(findMinAndRemoveSorted(secondArray))
        }
    }
    if (firstArray.length === 0) {
        newArr = newArr.concat(secondArray)
    }
    else {
        newArr = newArr.concat(firstArray)
    }
    return newArr
}

function mergeSort(array) {
    let midpoint = array.length / 2
    let firstArray = array.slice(0, midpoint)
    let secondArray = array.slice(midpoint, array.length)

    if (array.length < 2) {
        return array
    }
    else {
        return merge(mergeSort(firstArray), mergeSort(secondArray))
    }
}