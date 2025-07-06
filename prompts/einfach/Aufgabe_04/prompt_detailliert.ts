//Schreibe eine Funktion, die ein Array von Ganzzahlen nums als Eingabe erhält. Finde den kleinsten Index i, bei dem die Quersumme (Summe der Ziffern) von nums[i] gleich dem Index i ist. Gib diesen Index zurück. Wenn kein solcher Index existiert, gib -1 zurück.


function findeIndexMitQuersumme(nums: number[]): number {
    // Hilfsfunktion zur Berechnung der Quersumme einer Zahl
    function quersumme(n: number): number {
        return Math.abs(n)
            .toString()
            .split('')
            .reduce((sum, digit) => sum + Number(digit), 0);
    }

    for (let i = 0; i < nums.length; i++) {
        if (quersumme(nums[i]) === i) {
            return i;
        }
    }
    return -1;
}

