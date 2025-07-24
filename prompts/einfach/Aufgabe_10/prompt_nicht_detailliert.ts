//Berechne, welcher Tag im Jahr ein gegebenes Datum ist.


//ab hier ist generierter Code
export function dayOfYear(date: Date | string): number {
    const d = typeof date === "string" ? new Date(date) : date;
    if (isNaN(d.getTime())) {
        throw new Error("Ungültiges Datum");
    }
    const start = new Date(d.getFullYear(), 0, 0);
    const diff = d.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

// Beispiel:
// console.log(dayOfYear(new Date('2023-03-01'))); // 60
// console.log(dayOfYear('2023-03-01')); // 60