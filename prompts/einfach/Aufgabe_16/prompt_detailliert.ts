//Schreibe eine Funktion isSameAfterDoubleReverse, die überprüft, ob eine gegebene nicht-negative ganze Zahl num nach zweimaligem Umdrehen ihrer Ziffern wieder gleich ist. 
// Der Eingabeparameter num ist eine ganze Zahl (Typ: Integer) im Bereich von 0 bis 1.000.000. 
// Die Funktion gibt einen booleschen Wert (true oder false) zurück, der angibt, ob num gleich der Zahl ist, die entsteht, wenn man zuerst die Ziffern von num umkehrt (alle führenden Nullen nach dem Umdrehen werden entfernt) und anschließend die resultierende Zahl erneut umkehrt. 
// Es wird angenommen, dass die Zahl keine negativen Werte enthält. 
// 
// Beispiel: Für num = 526 ist das erste Umdrehen 625, das zweite Umdrehen ergibt 526, somit gibt die Funktion true zurück. 
// Für num = 1800 ist das erste Umdrehen 81, das zweite Umdrehen 18, was nicht 1800 entspricht, daher false. 
// Verwende einfache Umkehrlogik für die Ziffern und achte auf den Wegfall führender Nullen nach dem Umdrehen.



// ab hier ist generierter Code
/**
 * Prüft, ob eine Zahl nach zweimaligem Umdrehen der Ziffern wieder gleich ist.
 * @param num Nicht-negative ganze Zahl (0 <= num <= 1_000_000)
 * @returns true, wenn num nach zweimaligem Umdrehen gleich bleibt, sonst false
 */
function isSameAfterReversalsDetail(num: number): boolean {
    // Hilfsfunktion zum Umdrehen der Ziffern einer Zahl
    function reverse(n: number): number {
        return parseInt(n.toString().split('').reverse().join(''), 10);
    }

    const firstReverse = reverse(num);
    const secondReverse = reverse(firstReverse);

    return num === secondReverse;
}

// Beispieltests
// console.log(isSameAfterReversalsDetail(526));   // true
// console.log(isSameAfterReversalsDetail(1800));  // false
// console.log(isSameAfterReversalsDetail(0));     // true
// console.log(isSameAfterReversalsDetail(120));   // false