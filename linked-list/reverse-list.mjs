/* 
reverse list
Write a function, reverseList, that takes in the head of a linked list as an argument. 
The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

@test-cases:
------------
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

a -> b -> c -> d -> e -> f

reverseList(a); // f -> e -> d -> c -> b -> a

*/

import Node from "./linked-list-node.mjs"

const reverseList = (head) => {
  let prev = null
  let current = head

  while (current !== null) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

const reverseListRecursive = (head, prev = null) => {
  if (head === null) return prev
  const next = head.next
  head.next = prev
  return reverseListRecursive(next, head)
}
