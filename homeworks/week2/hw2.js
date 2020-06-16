function capitalize(str) {
    result = str[0].toUpperCase() + str.slice(1);
    return result
}

console.log(capitalize('hello'));
console.log(capitalize('nick'));
console.log(capitalize(',hello'));