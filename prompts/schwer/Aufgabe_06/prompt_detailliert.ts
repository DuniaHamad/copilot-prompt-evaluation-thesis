// Schreibe eine Funktion in TypeScript, die den maximal möglichen Gewinn aus dem Kauf und Verkauf von Aktien innerhalb eines Unternehmens berechnet, wobei Rabatte für Untergebene gelten, wenn deren Vorgesetzte ebenfalls kaufen. Gegeben sind n Mitarbeiter, durchnummeriert von 1 bis n, wobei Mitarbeiter 1 der CEO ist. Jeder Mitarbeiter darf heute eine Aktie zum Preis present[i] kaufen und sie morgen zum Preis future[i] verkaufen. Die Unternehmensstruktur wird durch ein Array hierarchy beschrieben, das für jede Beziehung ein Tupel [u, v] enthält, wobei u der direkte Chef von v ist. Zusätzlich gibt es ein Budget budget, das für Käufe nicht überschritten werden darf. Wenn ein Vorgesetzter eine Aktie kauft, darf der direkte Untergebene seine Aktie zum halben Preis (Math.floor(present[i] / 2)) kaufen. Jede Aktie darf nur einmal gekauft werden, und Gewinne aus Verkäufen dürfen nicht zum Kauf verwendet werden. Ziel ist es, die Kombination von Käufen zu finden, die unter Einhaltung des Budgets den maximalen Gesamtgewinn ergibt, also sum(future[i] - kaufpreis[i]).
// Eingabeparameter:
// n: number – Anzahl der Mitarbeiter


// present: number[] – Kaufpreise der Aktien (Index 0-basiert, aber entspricht Mitarbeiter 1-n)


// future: number[] – Verkaufspreise der Aktien


// hierarchy: number[][] – Array von Paaren [u, v] mit Chef u und Mitarbeiter v


// budget: number – Maximales Kaufbudget


// Ausgabe:
// number – Der maximal mögliche Gesamtgewinn


// Beispiel:
// ts
// KopierenBearbeiten
// const n = 3;  
// const present = [4, 6, 8];  
// const future = [7, 9, 11];  
// const hierarchy = [[1, 2], [1, 3]];  
// const budget = 10;  
// // Erwarteter Output: 10  

// Erklärung: Mitarbeiter 1 kauft für 4 (Gewinn 3), Mitarbeiter 3 bekommt Rabatt (8 → 4, Gewinn 7), Gesamtkosten 8, Gesamtgewinn 10.



// Ab Hier ist generierter Code
/**
 * Berechnet den maximalen Gewinn aus Aktienkäufen mit Hierarchie und Rabatten.
 * @param n Anzahl der Mitarbeiter (durchnummeriert 1..n)
 * @param present Kaufpreise der Aktien (Index 0-basiert)
 * @param future Verkaufspreise der Aktien (Index 0-basiert)
 * @param hierarchy Array von [u, v] mit Chef u und Mitarbeiter v (1-basiert)
 * @param budget Maximales Kaufbudget
 * @returns Maximal möglicher Gesamtgewinn
 */
function maximalerGewinnDetailliert(
    n: number,
    present: number[],
    future: number[],
    hierarchy: number[][],
    budget: number
): number {
    // Mappe: untergebener -> chef (0-basiert)
    const chefMap: number[] = Array(n).fill(-1);
    for (const [chef, untergebener] of hierarchy) {
        chefMap[untergebener - 1] = chef - 1;
    }

    let maxProfit = 0;

    // Prüfe alle 2^n Kaufkombinationen
    for (let mask = 0; mask < (1 << n); mask++) {
        let spent = 0;
        let profit = 0;
        const bought = Array(n).fill(false);

        // Markiere gekaufte Aktien
        for (let i = 0; i < n; i++) {
            if ((mask & (1 << i)) !== 0) {
                bought[i] = true;
            }
        }

        // Berechne Kosten und Gewinn für diese Kombination
        for (let i = 0; i < n; i++) {
            if (bought[i]) {
                let price = present[i];
                const chef = chefMap[i];
                if (chef !== -1 && bought[chef]) {
                    price = Math.floor(price / 2);
                }
                spent += price;
                profit += future[i] - price;
            }
        }

        if (spent <= budget) {
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
}

