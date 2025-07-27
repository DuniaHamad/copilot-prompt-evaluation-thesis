//Schreibe eine TypeScript-Funktion, die für n Flüge, nummeriert von 1 bis n, und eine Liste von Buchungen die Gesamtzahl der reservierten Sitze pro Flug berechnet. 
// Jede Buchung ist ein Array [first: number, last: number, seats: number], wobei first und last die Start- und Endflugnummer (inklusive) angeben und seats die Anzahl der reservierten Plätze pro Flug im Bereich ist. 
// Die Funktion erhält zwei Parameter: bookings: number[][] (Liste der Buchungen) und n: number (Gesamtanzahl der Flüge). 
// Sie soll ein Array number[] der Länge n zurückgeben, in dem an Index i die Summe der reservierten Plätze für Flug i + 1 steht. 
// Dabei gilt 1 <= first <= last <= n und seats > 0.
// 
//  Beispiel: Für bookings = [[1,2,10],[2,3,20],[2,5,25]] und n = 5 ist die Ausgabe [10,55,45,25,25]. 
// Implementiere die Funktion möglichst effizient mit einer Laufzeit von etwa O(n + m), wobei m die Anzahl der Buchungen ist, z.B. unter Verwendung eines Differenzarrays.



// ab hier ist generierter Code
/**
 * Berechnet die Gesamtzahl der reservierten Sitze pro Flug mit Differenzarray.
 * @param bookings - Array von Buchungen [first, last, seats]
 * @param n - Gesamtanzahl der Flüge
 * @returns Array mit reservierten Sitzen pro Flug
 */
function corpFlightBookingsDetail(bookings: number[][], n: number): number[] {
    const result = new Array(n).fill(0);

    for (const [first, last, seats] of bookings) {
        result[first - 1] += seats;
        if (last < n) result[last] -= seats;
    }

    for (let i = 1; i < n; i++) {
        result[i] += result[i - 1];
    }

    return result;
}

// Beispiel:
// const bookings = [[1,2,10],[2,3,20],[2,5,25]];
// const n = 5;
// console.log(corpFlightBookings(bookings, n)); // [10,55,45,25,25]