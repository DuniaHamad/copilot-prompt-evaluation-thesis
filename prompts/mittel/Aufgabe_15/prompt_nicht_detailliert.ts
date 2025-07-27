//Schreibe eine Funktion, die für gegebene Flugbuchungen die Anzahl der reservierten Sitze pro Flug berechnet.


// ab hier ist generierter Code
/**
 * Berechnet die Anzahl der reservierten Sitze für jeden Flug.
 * @param bookings - Array von Buchungen [start, end, sitze]
 * @param n - Anzahl der Flüge
 * @returns Array mit reservierten Sitzen pro Flug
 */
function corpFlightBookings(bookings: number[][], n: number): number[] {
    const seats = new Array(n).fill(0);

    for (const [start, end, sitze] of bookings) {
        seats[start - 1] += sitze;
        if (end < n) seats[end] -= sitze;
    }

    // Prefix Sum berechnen
    for (let i = 1; i < n; i++) {
        seats[i] += seats[i - 1];
    }

    return seats;
}

// Beispiel:
// const bookings = [[1,2,10],[2,3,20],[2,5,25]];
// const n = 5;
// console.log(corpFlightBookings(bookings, n)); // [10,55,45,25,25]