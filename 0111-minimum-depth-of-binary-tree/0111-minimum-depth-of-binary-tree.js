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
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
    return 0; // If the tree is empty, the minimum depth is 0
  }

  const queue = [[root, 1]]; // Initialize the queue with the root node and its depth

  while (queue.length > 0) {
    const [node, depth] = queue.shift(); // Dequeue the front node

    // If this is a leaf node, we've found the minimum depth
    if (node.left === null && node.right === null) {
      return depth;
    }

    // Add the left child to the queue with incremented depth
    if (node.left !== null) {
      queue.push([node.left, depth + 1]);
    }

    // Add the right child to the queue with incremented depth
    if (node.right !== null) {
      queue.push([node.right, depth + 1]);
    }
  }
};