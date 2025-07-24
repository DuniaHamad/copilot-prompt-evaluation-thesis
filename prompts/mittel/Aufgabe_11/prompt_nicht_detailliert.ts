//Berechne den H-Index eines Forschers aus einer Liste von Zitierungen

//ab hier ist generierter Code
/**
 * Berechnet den H-Index eines Forschers aus einer Liste von Zitierungen.
 * @param citations - Array mit Zitierungszahlen pro Publikation
 * @returns Der H-Index
 */
export function calculateHIndex(citations: number[]): number {
    citations.sort((a, b) => b - a);
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break;
        }
    }
    return h;
}

// Beispiel:
// calculateHIndex([3, 0, 6, 1, 5]) // ergibt 3