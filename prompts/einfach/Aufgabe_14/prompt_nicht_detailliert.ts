//Finde die kleinste Zahl größer oder gleich n, deren Ziffernprodukt durch t teilbar ist.

//ab hier ist generierter Code
/**
 * Gibt die kleinste Zahl >= n zurück, deren Ziffernprodukt durch t teilbar ist.
 * @param n Untere Grenze (inklusive)
 * @param t Teiler für das Ziffernprodukt
 * @returns Kleinste passende Zahl >= n
 */
function smallestNumberWithDigitProductDivisibleByT(n: number, t: number): number {
    for (let x = n; ; x++) {
        let prod = 1;
        let y = x;
        while (y > 0) {
            prod *= y % 10;
            y = Math.floor(y / 10);
        }
        if (prod % t === 0) return x;
    }
}

// Beispiel:
console.log(smallestNumberWithDigitProductDivisibleByT(15, 6)); // z.B. 15 (1*5=5, 5%6!=0), 16 (1*6=6, 6%6==0) → 16