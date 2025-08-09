function countAlternatingSubarraysDetail(nums: number[]): number {
    let total = 0;
    let length = 1; // Länge der aktuellen alternierenden Sequenz

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            length++;
        } else {
            // Füge alle Teilarrays der vorherigen alternierenden Sequenz hinzu
            total += (length * (length + 1)) / 2;
            length = 1;
        }
    }
    // Die letzte Sequenz hinzufügen
    total += (length * (length + 1)) / 2;

    return total;
}