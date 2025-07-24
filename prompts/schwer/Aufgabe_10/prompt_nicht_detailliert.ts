//Finde die größte Insel nach Umwandlung von einer 0 zu 1 in einer 2D-Matrix aus 0 und 1


//ab hier ist generierter Code
// Gibt die Größe der größten Insel zurück, nachdem eine 0 zu 1 geändert wurde
export function largestIsland(grid: number[][]): number {
    const n = grid.length;
    if (n === 0) return 0;
    const m = grid[0].length;
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]];
    let islandId = 2;
    const sizes: Record<number, number> = {};

    // DFS zur Markierung und Größenberechnung der Inseln
    function dfs(x: number, y: number, id: number): number {
        if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] !== 1) return 0;
        grid[x][y] = id;
        let size = 1;
        for (const [dx, dy] of dirs) {
            size += dfs(x + dx, y + dy, id);
        }
        return size;
    }

    // Inseln markieren und Größen speichern
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                const size = dfs(i, j, islandId);
                sizes[islandId] = size;
                islandId++;
            }
        }
    }

    let maxIsland = Math.max(0, ...Object.values(sizes));
    // Jede 0 prüfen: Welche Inseln würden verbunden?
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 0) {
                const seen = new Set<number>();
                let size = 1;
                for (const [dx, dy] of dirs) {
                    const ni = i + dx, nj = j + dy;
                    if (ni >= 0 && ni < n && nj >= 0 && nj < m) {
                        const id = grid[ni][nj];
                        if (id > 1 && !seen.has(id)) {
                            size += sizes[id];
                            seen.add(id);
                        }
                    }
                }
                maxIsland = Math.max(maxIsland, size);
            }
        }
    }
    return maxIsland === 0 ? n * m : maxIsland;
}

// Beispiel:
// console.log(largestIsland([[1,0],[0,1]])); // 3