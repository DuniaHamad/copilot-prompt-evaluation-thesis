 
 //Implementiere eine TypeScript-Funktion, die den Lowest Common Ancestor (LCA) der am tiefsten gelegenen Blätter eines binären Baums zurückgibt. 
 // Die Eingabe ist die Wurzel root eines Binärbaums, bestehend aus TreeNode-Objekten mit den Eigenschaften val: number, left: TreeNode | null und right: TreeNode | null. 
 // Die Funktion soll den Knoten zurückgeben, der der tiefste gemeinsame Vorfahre aller am tiefsten liegenden Blätter ist. 
 // 
 // Ein Knoten ist ein Blatt, wenn beide Kinder null sind. 
 // Die Tiefe der Wurzel ist 0, die Tiefe eines Kindes ist um 1 größer als die des Elternknotens. 
 // Alle Knotenwerte sind eindeutig und liegen zwischen 0 und 1000. Der Baum enthält mindestens 1 und höchstens 1000 Knoten. 
 // 
 // Verwende eine rekursive Tiefensuche (DFS), um zunächst die maximale Tiefe der Blätter zu bestimmen und dann den LCA dieser Blätter zu finden. 
 // 
 // Beispiel: Für root = [3,5,1,6,2,0,8,null,null,7,4] ist die Ausgabe der Knoten mit Wert 2, da die tiefsten Blätter 7 und 4 sind und ihr gemeinsamer Vorfahre 2 ist.


 //Definition for a binary tree node.
 class TreeNodeDetailliert {
    val: number
    left: TreeNodeDetailliert | null
    right: TreeNodeDetailliert | null
    constructor(val?: number, left?: TreeNodeDetailliert | null, right?: TreeNodeDetailliert | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
 }
 

function lcaDeepestLeavesdetailliert(root: TreeNodeDetailliert | null): TreeNodeDetailliert | null {
    // Hilfsfunktion: Gibt [maximale Tiefe, LCA-Knoten] zurück
    function dfs(node: TreeNodeDetailliert | null): [number, TreeNodeDetailliert | null] {
        if (!node) return [0, null];
        const [leftDepth, leftLCA] = dfs(node.left);
        const [rightDepth, rightLCA] = dfs(node.right);

        if (leftDepth > rightDepth) return [leftDepth + 1, leftLCA];
        if (rightDepth > leftDepth) return [rightDepth + 1, rightLCA];
        // Wenn beide Seiten gleich tief sind, ist der aktuelle Knoten der LCA
        return [leftDepth + 1, node];
    }

    return dfs(root)[1];
}
