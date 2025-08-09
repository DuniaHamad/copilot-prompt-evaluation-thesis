//type Interval = [number, number, number];

function maxWeightIntervals(intervals: Interval[]): number[] {
    let best: number[] = [];
    let bestSum = -1;

    for (let k = 1; k <= 4; k++) {
        for (const indices of combinations(intervals.length, k)) {
            const selected = indices.map(i => intervals[i]);
            if (isNonOverlapping(selected)) {
                const sum = selected.reduce((a, b) => a + b[2], 0);
                if (
                    sum > bestSum ||
                    (sum === bestSum && lexLess(indices, best))
                ) {
                    bestSum = sum;
                    best = indices.slice();
                }
            }
        }
    }
    return best;

    function isNonOverlapping(arr: Interval[]): boolean {
        arr.sort((a, b) => a[0] - b[0]);
        for (let i = 1; i < arr.length; i++)
            if (arr[i - 1][1] >= arr[i][0]) return false;
        return true;
    }

    function lexLess(a: number[], b: number[]): boolean {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] < b[i]) return true;
            if (a[i] > b[i]) return false;
        }
        return a.length < b.length;
    }

    function combinations(n: number, k: number): number[][] {
        const res: number[][] = [];
        function backtrack(start: number, path: number[]) {
            if (path.length === k) {
                res.push(path.slice());
                return;
            }
            for (let i = start; i < n; i++) {
                path.push(i);
                backtrack(i + 1, path);
                path.pop();
            }
        }
        backtrack(0, []);
        return res;
    }
}