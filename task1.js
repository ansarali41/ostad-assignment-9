class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function treeHeight(rootValues) {
    if (!rootValues || rootValues.length === 0) {
        return 0;
    }

    const buildTree = (values, index) => {
        if (index >= values.length || values[index] === null) {
            return null;
        }

        const node = new TreeNode(values[index]);
        node.left = buildTree(values, 2 * index + 1);
        node.right = buildTree(values, 2 * index + 2);

        return node;
    };

    const root = buildTree(rootValues, 0);

    const calculateHeight = node => {
        if (!node) {
            return 0;
        }

        const leftHeight = calculateHeight(node.left);
        const rightHeight = calculateHeight(node.right);

        return 1 + Math.max(leftHeight, rightHeight);
    };

    return calculateHeight(root);
}

// Example
const input1 = [3, 9, 20, null, null, 15, 7];
console.log(treeHeight(input1)); // Output: 3

const input2 = [1, null, 2];
console.log(treeHeight(input2)); // Output: 2

//  time complexity is O(n)
// space complexity is O(max(n, h)) where n is the number of nodes and h is the height of the tree
