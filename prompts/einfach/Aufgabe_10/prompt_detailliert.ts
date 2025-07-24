//Schreibe eine TypeScript-Funktion, die einen Parameter date vom Typ string entgegennimmt, welcher ein Datum im Format "YYYY-MM-DD" repräsentiert und ein gültiges Datum zwischen dem 1. Januar 1900 und 31. Dezember 2019 darstellt. Die Funktion soll eine Zahl zurückgeben, die den Tagesnummer des Jahres entspricht, an dem dieses Datum liegt (z. B. 1 für den 1. Januar, 41 für den 10. Februar). Berücksichtige Schaltjahre: Ein Jahr ist Schaltjahr, wenn es durch 4 teilbar ist, außer es ist durch 100 teilbar, es sei denn, es ist durch 400 teilbar. Nutze nur Standard-Typescript- und JavaScript-Funktionalitäten. Beispiel: Für date = "2019-02-10" soll die Funktion 41 zurückgeben.


//Ab hier ist generierter Code
export function dayOfYear(date: string): number {
    // Prüfe Format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        throw new Error("Ungültiges Datumsformat");
    }
    const [yearStr, monthStr, dayStr] = date.split("-");
    const year = parseInt(yearStr, 10);
    const month = parseInt(monthStr, 10);
    const day = parseInt(dayStr, 10);

    // Prüfe Jahr
    if (year < 1900 || year > 2019) {
        throw new Error("Jahr außerhalb des gültigen Bereichs");
    }

    // Prüfe Monat und Tag
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        throw new Error("Ungültiger Monat oder Tag");
    }

    // Schaltjahrberechnung
    const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

    // Tage pro Monat
    const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day > daysInMonth[month - 1]) {
        throw new Error("Ungültiger Tag für diesen Monat");
    }

    // Tagesnummer berechnen
    let dayOfYear = day;
    for (let i = 0; i < month - 1; i++) {
        dayOfYear += daysInMonth[i];
    }
    return dayOfYear;
}

// Beispiel:
// console.log(dayOfYear("2019-02-10")); // 41