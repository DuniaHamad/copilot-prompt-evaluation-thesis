// Prompt1: Find the maximum overlap of two binary matrices after shifting one.



//Ab Hier ist generierter Code
// Find the maximum overlap of two binary matrices (A and B) after shifting one matrix over the other in any direction.
// Both matrices are square and contain only 0s and 1s.

function largestOverlap(A: number[][], B: number[][]): number {
    const n = A.length;
    let maxOverlap = 0;

    for (let dx = -n + 1; dx < n; dx++) {
        for (let dy = -n + 1; dy < n; dy++) {
            let overlap = 0;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    const x = i + dx;
                    const y = j + dy;
                    if (x >= 0 && x < n && y >= 0 && y < n) {
                        if (A[i][j] === 1 && B[x][y] === 1) {
                            overlap++;
                        }
                    }
                }
            }
            maxOverlap = Math.max(maxOverlap, overlap);
        }
    }
    return maxOverlap;
}