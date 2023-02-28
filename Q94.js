var inorderTraversal = function (root) {
    let result = []
    let stack = []

    let currentNode = root
    while (currentNode || stack.length) { // currentNode is not null or stack is not empty
        if (currentNode) { // currentNode is not null, which have left child
            stack.push(currentNode) // push current node to stack
            currentNode = currentNode.left // go to left child
        }else { 
            // when currentNode is null, which means current node is leaf node
            currentNode = stack.pop() // pop the last node in stack
            result.push(currentNode.val) // push the value of current node to result
            currentNode = currentNode.right // go to right child
        }
    }
    return result
};
