const sum = () => {
    let numberByDefault = 0;

    return (numberToAdd) => {
        numberByDefault += numberToAdd;
        return numberByDefault;
    }
}

let summary = sum();

console.log(summary(3));
console.log(summary(5));
console.log(summary(20));