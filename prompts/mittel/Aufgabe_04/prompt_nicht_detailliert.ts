//find ancestor of deepest nodes in binary tree


  //Definition for a binary tree node.
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    // Helper function returns [depth, lca]
    function dfs(node: TreeNode | null): [number, TreeNode | null] {
        if (!node) return [0, null];
        const [leftDepth, leftLCA] = dfs(node.left);
        const [rightDepth, rightLCA] = dfs(node.right);

        if (leftDepth > rightDepth) return [leftDepth + 1, leftLCA];
        if (rightDepth > leftDepth) return [rightDepth + 1, rightLCA];
        return [leftDepth + 1, node];
    }

    return dfs(root)[1];
}