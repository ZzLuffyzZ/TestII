function arrayDiff(arr1, arr2) {
    let diff = {};

    diff.arr1 = arr1.filter(function(value) {
        if (arr2.indexOf(value) === -1) {
            return value;
        }
    });

    diff.arr2 = arr2.filter(function(value) {
        if (arr1.indexOf(value) === -1) {
            return value;
        }
    });

    diff.concat = diff.arr1.concat(diff.arr2);

    return diff;
};

let A1 = [1,2,"a"];
let A2 = [1,3,"b"];


console.log( arrayDiff(A1, A2).concat );
