// Chaining Prompt:
// Prompt: Implementiere eine Funktion, die Süßigkeiten an Kinder verteilt, basierend auf ihren Bewertungen. Jedes Kind soll mindestens eine Süßigkeit bekommen, und Kinder mit höheren Bewertungen als ihre Nachbarn sollen mehr Süßigkeiten erhalten. Die Funktion soll die minimale Gesamtanzahl an Süßigkeiten zurückgeben, die verteilt werden müssen.


// Situation:
// Kinder stehen in einer Reihe mit Ratings.

// Symptom:
// Man muss Süßigkeiten verteilen, sodass höhere Ratings mehr bekommen.

// Solution:
// Jedes Kind erhält mindestens eine Süßigkeit, höher bewertete Kinder mehr als ihre Nachbarn.

// Steps:
// 1. Jeder bekommt 1 Süßigkeit.
// 2. Von links nach rechts prüfen und Süßigkeiten anpassen.
// 3. Von rechts nach links prüfen und anpassen.
// 4. Summe der Süßigkeiten berechnen und zurückgeben.


/**
 * Verteilt Süßigkeiten an Kinder gemäß ihren Ratings.
 * @param ratings Array von Zahlen, die das Rating jedes Kindes angeben.
 * @returns Minimale Gesamtanzahl an Süßigkeiten, die verteilt werden müssen.
 */
export function verteileSuessigkeiten(ratings: number[]): number {
    const n = ratings.length;
    if (n === 0) return 0;

    const suessigkeiten = new Array(n).fill(1);

    // Von links nach rechts prüfen
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            suessigkeiten[i] = suessigkeiten[i - 1] + 1;
        }
    }

    // Von rechts nach links prüfen
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            suessigkeiten[i] = Math.max(suessigkeiten[i], suessigkeiten[i + 1] + 1);
        }
    }

    // Summe berechnen
    return suessigkeiten.reduce((sum, val) => sum + val, 0);
}