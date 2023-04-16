function compareArrays(arr1, arr2) {
    return (arr1.every((item, idx) => item === arr2[idx])) && (arr1.length === arr2.length)
}
console.log(compareArrays);


function getUsersNamesInAgeRange(users, gender) {
    let output = users.filter(users => users.gender === gender).map(users => users.age).reduce((acc, item, idx, arr)=> {
        acc += item;
        if (idx === arr.length - 1) {
            return acc / arr.length;
        }
        return acc; 
    }, 0) 
    return output;

    console.log(getUsersNamesInAgeRange);
}