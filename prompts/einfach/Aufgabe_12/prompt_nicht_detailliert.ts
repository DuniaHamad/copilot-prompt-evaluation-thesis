//Berechne den Score eines Strings anhand der Differenz der Zeichen


//ab hier ist generierter Code
/**
 * Berechnet den Score eines Strings als Summe der absoluten Differenzen benachbarter Zeichen (Unicode-Wert).
 * @param s - Eingabestring
 * @returns Score (number)
 */
export function stringScore(s: string): number {
    let score = 0;
    for (let i = 1; i < s.length; i++) {
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    }
    return score;
}

// Beispiel:
// stringScore("hello") // 13