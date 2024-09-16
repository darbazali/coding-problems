/* 
tree value count
----------------

Write a function, treeValueCount, that takes in the root of a binary tree and a target value. 
The function should return the number of times that the target occurs in the tree.

@example:
const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

      12
    /   \
   6     6
  / \     \
 4   6     12

treeValueCount(a,  6); // -> 3

*/

const treeValueCount = (root, target) => {
  if (root === null) return 0

  const stack = [root]
  let count = 0

  while (stack.length > 0) {
    const node = stack.pop()
    if (node.value === target) count += 1

    if (node.right !== null) stack.push(node.right)
    if (node.left !== null) stack.push(node.left)
  }

  return count
}

const treeValueCountRecursive = (root, target) => {
  if (root === null) return 0
  const match = root.value === target ? 1 : 0
  return (
    match +
    treeValueCountRecursive(root.left, target) +
    treeValueCountRecursive(root.right, target)
  )
}

export default treeValueCount
