export default function getIndex(arr) {
    if (!Array.isArray(arr)) return arr;

    return arr[0] * 8 + arr[1];
};

export function getArray(index) {
    if (Array.isArray(index)) return index;

    return [Math.floor(index / 8), index % 8];
};