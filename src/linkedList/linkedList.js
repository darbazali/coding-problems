class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value)
      return
    }

    let current = this.head

    while (current.next !== null) {
      current = current.next
    }

    current.next = new Node(value)
  }

  print() {
    let current = this.head
    while (current !== null) {
      console.log(current.value)
      current = current.next
    }
  }
}

const list = new LinkedList()
list.append("a")
list.append("b")
list.append("c")

list.print()
