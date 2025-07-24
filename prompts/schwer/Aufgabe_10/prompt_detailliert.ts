//Schreibe eine Funktion largestIsland, die ein Quadrat grid (Liste von Listen mit Ganzzahlen 0 oder 1, n x n) entgegennimmt. Eine 1 steht für Land, eine 0 für Wasser. 
// Die Funktion darf genau eine 0 in eine 1 umwandeln, um dadurch eine größere Insel zu bilden. 
// Eine Insel besteht aus zusammenhängenden 1ern, die horizontal oder vertikal benachbart sind (nicht diagonal).
// 
//  Gib die Größe (Anzahl Felder) der größten möglichen Insel zurück, die durch genau eine solche Umwandlung entsteht.
//  Wenn alle Felder 1 sind, gib einfach die Gesamtzahl der 1er zurück.


//ab hier ist generierter Code
/**
 * Gibt die Größe der größten Insel zurück, die durch Umwandlung einer 0 zu 1 entstehen kann.
 * @param grid - Quadratmatrix aus 0 (Wasser) und 1 (Land)
 * @returns Größe der größten möglichen Insel
 */
export function largestIsland(grid: number[][]): number {
    const n = grid.length;
    if (n === 0) return 0;
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]];
    let islandId = 2;
    const sizes: Record<number, number> = {};

    // DFS zur Markierung und Größenberechnung der Inseln
    function dfs(x: number, y: number, id: number): number {
        if (x < 0 || x >= n || y < 0 || y >= n || grid[x][y] !== 1) return 0;
        grid[x][y] = id;
        let size = 1;
        for (const [dx, dy] of dirs) {
            size += dfs(x + dx, y + dy, id);
        }
        return size;
    }

    // Inseln markieren und Größen speichern
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
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
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                const seen = new Set<number>();
                let size = 1;
                for (const [dx, dy] of dirs) {
                    const ni = i + dx, nj = j + dy;
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
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
    // Falls alles Land ist, ist die größte Insel die Gesamtzahl der Felder
    return maxIsland === 0 ? n * n : maxIsland;
}

// Beispiel:
// console.log(largestIsland([[1,0],[0,1]])); // 3