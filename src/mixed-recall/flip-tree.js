/* 
flip tree
Write a function, flipTree, that takes in the root of a binary tree. 
The function should flip the binary tree, turning left subtrees into right subtrees and vice-versa. 
This flipping should occur in-place by modifying the original tree. 
The function should return the root of the tree.

@test-cases:
------------
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

      a
    /    \
   b      c
  / \      \
 d   e      f
    / \
    g  h

flipTree(a); 

       a
    /    \
   c      b
  /     /   \
 f     e    d
     /  \
    h    g

*/

const flipTree = (root) => {
  if (root === null) return null

  const left = flipTree(root.left)
  const right = flipTree(root.right)
  root.right = left
  root.left = right

  return root
}
