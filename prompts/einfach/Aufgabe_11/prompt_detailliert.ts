//Schreibe eine Funktion mit dem Namen reverseBits, die eine 32-Bit unsigned Ganzzahl n (Datentyp: int) als Eingabe erhält und eine Ganzzahl (int) zurückgibt, bei der die Bitreihenfolge der ursprünglichen Zahl komplett umgekehrt wurde. 
// Das bedeutet: Das am weitesten rechts stehende Bit wird zum am weitesten links stehenden Bit usw., sodass das Ergebnis der spiegelbildlichen Darstellung der Binärform entspricht. 
// Die Funktion soll davon ausgehen, dass genau 32 Bits verarbeitet werden und führende Nullen korrekt berücksichtigt werden müssen. 
// Die Eingabe liegt im Bereich von 0 bis 2³²–1.
//  Gib das Ergebnis als Dezimalzahl zurück. Beispiel: Input n = 43261596 (Binär: 00000010100101000001111010011100) ergibt Output 964176192 (Binär: 00111001011110000010100101000000). 
// 
// Weitere Beispiele: Input n = 2147483644 → Output 1073741822. 
// Verwende ausschließlich Standardfunktionen ohne externe Bibliotheken und achte auf eine Laufzeitkomplexität von O(1) pro Funktionsaufruf.



//ab hier ist generierter Code
/**
 * Dreht die Bitreihenfolge einer 32-Bit unsigned Ganzzahl um.
 * @param n - 32-Bit unsigned Ganzzahl
 * @returns Die Ganzzahl mit umgekehrter Bitreihenfolge
 */
export function reverseBits(n: number): number {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result <<= 1;
        result |= (n >> i) & 1;
    }
    return result >>> 0; // unsigned 32-bit Ergebnis
}

// Beispiel:
// reverseBits(43261596) // ergibt 964176192