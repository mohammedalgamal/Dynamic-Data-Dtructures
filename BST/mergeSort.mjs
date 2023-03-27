function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        };
    };

    result = result.concat(arr1.slice(i), arr2.slice(j));

    return result
};

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    else {
        return merge(
            mergeSort(arr.slice(0, Math.ceil(arr.length / 2))), 
            mergeSort(arr.slice(Math.ceil(arr.length / 2))));
    }
};

export default function removeDuplicatesSort(arr) {
    const newArr = [...new Set(arr)];
    return mergeSort(newArr);
};