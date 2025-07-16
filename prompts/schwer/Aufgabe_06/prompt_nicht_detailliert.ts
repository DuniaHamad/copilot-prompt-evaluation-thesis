// prompt1:Mitarbeiter haben Kauf- und Verkaufspreise, eine Chef-Untergebenen-Hierarchie und ein Budget. Finde die maximale Gewinnsumme, wenn Mitarbeiter Rabatte bekommen, falls ihr Chef kauft.
//prompt2: Schreibe eine Funktion maxProfit(n, present, future, hierarchy, budget), die bei gegebener Mitarbeiterzahl, Kauf- und Verkaufspreisen, Hierarchie und Budget den maximalen Gewinn berechnet. Rabatt auf Kaufpreis gibt es, wenn der Chef seine Aktie kauft.
//prompt3: Funktion zur Berechnung des maximalen Gewinns beim Aktienkauf mit Budget und Rabatten für Mitarbeiter, wenn deren Chef kauft. Rabatt oder Budget werden evtl. nicht korrekt berücksichtigt.
//prompt4: Implementiere eine Funktion, die bei gegebener Mitarbeiter-Hierarchie, Kauf- und Verkaufspreisen sowie Budget den maximalen Gewinn berechnet. Achte darauf, dass Rabatte für Mitarbeiter bei Chefkäufen richtig angewendet und das Budget korrekt eingehalten werden.
//prompt5: Schreibe eine Funktion, die bei gegebener Mitarbeiter-Hierarchie, Kauf- und Verkaufspreisen sowie Budget den maximalen Gewinn berechnet. Mitarbeiter bekommen 50% Rabatt auf den Kaufpreis, wenn ihr direkter Chef die Aktie kauft. Die Gesamtkosten dürfen das Budget nicht überschreiten. Prüfe alle Kaufkombinationen, um den höchstmöglichen Gewinn zu finden.
//prompt6: Schreibe eine Funktion, die für eine Mitarbeiter-Hierarchie mit Kauf- und Verkaufspreisen sowie einem Budget den maximalen Gewinn berechnet. Jeder Mitarbeiter kann die Aktie höchstens einmal kaufen. Wenn ein Mitarbeiter seinen direkten Chef die Aktie kauft, erhält er 50% Rabatt auf den Kaufpreis (abgerundet). Die Gesamtkosten aller Käufe dürfen das Budget nicht überschreiten. Berechne den Gewinn als Verkaufspreis minus tatsächlichem Kaufpreis. Prüfe alle möglichen Kaufkombinationen und Rabattketten, um den maximalen Gesamtgewinn zu ermitteln.
//prompt7: Schreibe eine Funktion, die bei gegebener Mitarbeiter-Hierarchie, Kauf- und Verkaufspreisen sowie Budget den maximalen Gewinn berechnet. Jeder Mitarbeiter kann die Aktie höchstens einmal kaufen. Wenn ein direkter Chef die Aktie kauft, bekommen seine direkten Untergebenen 50% Rabatt (abgerundet) auf ihren Kaufpreis. Die Gesamtkosten aller Käufe dürfen das Budget nicht überschreiten. Die Funktion muss alle möglichen Kombinationen von Käufen prüfen, dabei die Rabatte korrekt anwenden und den maximalen Gesamtgewinn berechnen. Achte besonders darauf, dass Kombinationen mit mehreren Käufern, bei denen Rabatte greifen, berücksichtigt werden.
//prompt8: Schreibe eine Funktion, die den maximalen Gewinn aus Aktienkäufen von Mitarbeitern berechnet. Jeder Mitarbeiter hat einen Kauf- und Verkaufspreis. Mitarbeiter erhalten 50% Rabatt auf den Kaufpreis, wenn ihr direkter Chef die Aktie kauft. Das Budget darf nicht überschritten werden. Jede Aktie kann nur einmal gekauft werden. Prüfe alle möglichen Kaufkombinationen im Hierarchiebaum, berücksichtige Rabatte nur bei direkten Boss-Untergebenen-Beziehungen, und finde die Kombination mit dem höchsten Gesamtgewinn.
//prompt9: Schreibe eine Funktion, die den maximalen Gewinn aus Aktienkäufen von Mitarbeitern berechnet. Mitarbeiter haben Kauf- und Verkaufspreise. Wenn der direkte Chef die Aktie kauft, bekommen Untergebene 50% Rabatt auf den Kaufpreis. Die Gesamtkosten dürfen das Budget nicht überschreiten. Jede Aktie kann nur einmal gekauft werden. Prüfe alle Kaufkombinationen, berücksichtige Rabatte nur bei direkten Boss-Untergebenen-Beziehungen, und finde den höchsten Gesamtgewinn. Beispiel: Input: n=2, present=[1,2], future=[4,3], hierarchy=[[1,2]], budget=3 Output: 5 (nicht 4)



//ab hier ist generierter code
/**
 * Berechnet den maximalen Gewinn aus Aktienkäufen von Mitarbeitern mit Hierarchie und Rabatten.
 * Mitarbeiter erhalten 50% Rabatt auf den Kaufpreis, wenn ihr direkter Chef die Aktie kauft.
 * Die Gesamtkosten dürfen das Budget nicht überschreiten. Jede Aktie kann nur einmal gekauft werden.
 * Prüft alle Kaufkombinationen und berücksichtigt Rabatte nur bei direkten Boss-Untergebenen-Beziehungen.
 *
 * @param n Anzahl der Mitarbeiter
 * @param present Array der Kaufpreise
 * @param future Array der Verkaufspreise
 * @param hierarchy Array von [Chef, Untergebener]-Paaren
 * @param budget Gesamtbudget
 * @returns Maximaler Gesamtgewinn
 */
function maximalerGewinn(
    n: number,
    present: number[],
    future: number[],
    hierarchy: [number, number][],
    budget: number
): number {
    // Mappe: untergebener -> chef
    const chefMap: number[] = Array(n + 1).fill(-1);
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
                    price = Math.floor(price * 0.5);
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
