class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function arrayToTree(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

function searchBST(root, val) {
    if (!root) {
        return [];
    }

    if (val === root.val) {
        return toArray(root);
    } else if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
}

function toArray(node) {
    if (!node) {
        return [];
    }

    const result = [node.val];
    result.push(...toArray(node.left));
    result.push(...toArray(node.right));

    return result;
}

// Example1
const treeArray1 = [4, 2, 7, 1, 3];
const val1 = 2;

const tree1 = arrayToTree(treeArray1);
console.log(searchBST(tree1, val1)); // Output: [2, 1, 3]
// Example2
const treeArray2 = [4, 2, 7, 1, 3];
const val2 = 5;

const tree2 = arrayToTree(treeArray2);
console.log(searchBST(tree2, val2)); // Output: []

// the time complexity is O(n)
// space complexity is O(max(n, h))
