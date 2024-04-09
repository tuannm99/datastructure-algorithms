class Node:

    def __init__(self) -> None:
        self.next = None
        self.prev = None
        self.data = None


class NodeTree:

    def __init__(self) -> None:
        self.left = None
        self.right = None
        self.data = None


graph = {
    "A": ["S", "F", "E"]
}

# each element represent to a head of linkedlist
adjacency_list = []

adjacency_matrix = [
    [],
    [],
    []
]
