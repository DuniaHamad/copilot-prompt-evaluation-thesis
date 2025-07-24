//Schreibe eine Funktion, die die Bits einer Zahl umdreht

//ab hier ist generierter Code
/**
 * Dreht die Bits einer Zahl um (Bit-Reversal), Anzahl der Bits wird automatisch bestimmt.
 * @param n - Die Zahl, deren Bits umgedreht werden sollen
 * @returns Die Zahl mit umgedrehten Bits
 */
export function reverseBits(n: number): number {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result <<= 1;
        result |= (n >> i) & 1;
    }
    return result >>> 0; // unsigned 32-bit
}

// Beispiele:
// reverseBits(13, 4) // 13 = 1101 (4 Bit) -> 1011 = 11
// reverseBitsAuto(13) // 13 = 1101 -> 1011 = 11