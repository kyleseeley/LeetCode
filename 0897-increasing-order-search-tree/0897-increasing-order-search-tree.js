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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const nodes = [];
    
    // Helper function to perform in-order traversal and collect nodes
    function inOrderTraversal(node) {
        if (!node) return;
        inOrderTraversal(node.left);
        nodes.push(node);
        inOrderTraversal(node.right);
    }
    
    // Perform in-order traversal
    inOrderTraversal(root);
    
    // Reconstruct the tree
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].left = null;
        nodes[i].right = nodes[i + 1];
    }
    nodes[nodes.length - 1].left = null;
    nodes[nodes.length - 1].right = null;
    
    return nodes[0];
};