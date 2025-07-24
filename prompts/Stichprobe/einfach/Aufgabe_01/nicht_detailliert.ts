
//Schreibe eine Funktion, die zwei Indizes von Zahlen zurückgibt, die zusammen target ergeben.



/**
 * Gibt zwei Indizes von Zahlen zurück, deren Summe das Ziel ergibt.
 * @param nums Array von Ganzzahlen
 * @param target Zielwert
 * @returns Array mit zwei Indizes oder [-1, -1] falls keine Lösung existiert
 */
function twoSumprobe(nums: number[], target: number): [number, number] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    return [-1, -1];
}

// Beispiel:
console.log(twoSum([2, 7, 11, 15], 9)); // Ausgabe: [0, 1]