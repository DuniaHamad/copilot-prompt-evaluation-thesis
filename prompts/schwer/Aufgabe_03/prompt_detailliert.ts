// Situation:
// Es gibt n Kinder, die in einer Linie stehen. Jedes Kind hat eine Bewertung (ratings).

// Symptom:
// Die Kinder haben unterschiedliche Bewertungen, und man soll Süßigkeiten gerecht verteilen.

// Solution:
// Jedes Kind muss mindestens eine Süßigkeit bekommen. Kinder mit höherer Bewertung als ihre direkten Nachbarn müssen mehr Süßigkeiten bekommen.

// Steps:
// 1. Jedes Kind bekommt mindestens 1 Süßigkeit.
// 2. Vergleiche von links nach rechts: Wenn ein Kind eine höhere Bewertung als das linke Nachbarkind hat, bekommt es mehr Süßigkeiten.
// 3. Vergleiche von rechts nach links: Wenn ein Kind eine höhere Bewertung als das rechte Nachbarkind hat, bekommt es mindestens mehr Süßigkeiten als dieses.
// 4. Summiere die Anzahl der Süßigkeiten aller Kinder und gib das Ergebnis zurück.


/**
 * Verteilt Süßigkeiten an Kinder gemäß ihren Bewertungen.
 * @param ratings Array mit den Bewertungen der Kinder.
 * @returns Minimale Gesamtanzahl an Süßigkeiten, die verteilt werden müssen.
 */
export function verteileSuessigkeiten(ratings: number[]): number {
    const n = ratings.length;
    if (n === 0) return 0;

    const suessigkeiten = new Array(n).fill(1);

    // Von links nach rechts vergleichen
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            suessigkeiten[i] = suessigkeiten[i - 1] + 1;
        }
    }

    // Von rechts nach links vergleichen
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            suessigkeiten[i] = Math.max(suessigkeiten[i], suessigkeiten[i + 1] + 1);
        }
    }

    // Gesamtanzahl berechnen
    return suessigkeiten.reduce((sum, val) => sum + val, 0);
}