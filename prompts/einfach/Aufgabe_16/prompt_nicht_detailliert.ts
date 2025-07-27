//Schreibe eine Funktion, die prüft, ob eine Zahl nach zweimaligem Umdrehen der Ziffern wieder gleich ist.


// ab hier ist generierter Code
function isSameAfterDoubleReverse(num: number): boolean {
    // Eine Zahl bleibt nach zweimaligem Umdrehen gleich,
    // außer sie endet auf 0 (außer 0 selbst).
    return num === 0 || num % 10 !== 0;
}

// Beispieltests
// console.log(isSameAfterDoubleReverse(0));    // true
// console.log(isSameAfterDoubleReverse(123));  // true
// console.log(isSameAfterDoubleReverse(120));  // false