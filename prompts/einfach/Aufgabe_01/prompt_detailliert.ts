/**
 * Schreibe eine TypeScript-Funktion namens `twoSum`, die folgendes macht:
 * 
 * - Nimmt ein Array von Ganzzahlen `nums` und eine Ganzzahl `target` als Parameter.
 * - Gibt ein Array mit genau zwei Indizes zurück, deren Werte in `nums` zusammen `target` ergeben.
 * - Es wird angenommen, dass genau eine Lösung existiert.
 * - Dieselbe Zahl darf nicht zweimal verwendet werden.
 * - Die Reihenfolge der zurückgegebenen Indizes ist egal.
 * 
 * Beispiel:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * 
 * Schreibe den Code effizient mit einer Laufzeit unter O(n²).
 */
function twoSumDetail(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const rest = target - nums[i];
        if (map.has(rest)) {
            return [map.get(rest)!, i];
        }
        map.set(nums[i], i);
    }
    throw new Error("Keine Lösung gefunden");
}
