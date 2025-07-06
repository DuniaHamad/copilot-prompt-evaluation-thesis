//Schreibe eine Funktion smallestIndex, die aus einem Array von Zahlen den kleinsten Index zurückgibt, bei dem die Summe der Ziffern des Elements gleich dem Index ist. Wenn kein solcher Index existiert, soll -1 zurückgegeben werden.


function smallestIndex(nums: number[]): number {
    function digitSum(n: number): number {
        return Math.abs(n)
            .toString()
            .split('')
            .reduce((sum, digit) => sum + Number(digit), 0);
    }

    for (let i = 0; i < nums.length; i++) {
        if (digitSum(nums[i]) === i) {
            return i;
        }
    }
    return -1;
}