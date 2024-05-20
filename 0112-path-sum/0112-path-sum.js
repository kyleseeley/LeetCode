/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
if (root === null) {
    return false; // Base case: if the tree is empty, there's no path
  }

  // Check if we are at a leaf node and if the remaining targetSum equals the leaf's value
  if (root.left === null && root.right === null) {
    return targetSum === root.val;
  }

  // Recursively check the left and right subtrees with the updated targetSum
  const remainingSum = targetSum - root.val;
  return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
}