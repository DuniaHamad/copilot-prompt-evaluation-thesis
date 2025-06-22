// Aufgabe: Finde den Median zweier sortierter Arrays (nums1, nums2).
// Die Arrays sind sortiert (int) und können unterschiedliche Längen haben.
// Gib den Median als float zurück. Laufzeit muss O(log(m + n)) sein.

// Beispiel:
// Eingabe: nums1 = [1, 3], nums2 = [2]
// Erwartete Ausgabe: 2.0
// Erklärung: Zusammengeführt ergibt [1, 2, 3]; der Median ist 2.

// Hinweis:
// - Wenn die Gesamtlänge gerade ist, ist der Median der Durchschnitt der beiden mittleren Zahlen.
// - Wenn sie ungerade ist, ist es die mittlere Zahl.
// - Verwende eine binäre Suche zur effizienten Lösung.

function findMedianSortedArraysDetail(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;

        if (i < m && nums2[j - 1] > nums1[i]) {
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1;
        } else {
            let maxOfLeft: number;
            if (i === 0) {
                maxOfLeft = nums2[j - 1];
            } else if (j === 0) {
                maxOfLeft = nums1[i - 1];
            } else {
                maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            if ((m + n) % 2 === 1) {
                return maxOfLeft;
            }

            let minOfRight: number;
            if (i === m) {
                minOfRight = nums2[j];
            } else if (j === n) {
                minOfRight = nums1[i];
            } else {
                minOfRight = Math.min(nums1[i], nums2[j]);
            }

            return (maxOfLeft + minOfRight) / 2;
        }
    }

    throw new Error("Input arrays are not sorted oder invalid.");
}
