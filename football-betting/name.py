import csv
import json

class TreeNode:
    def __init__(self, min_name, max_name, filename):
        self.min_name = min_name
        self.max_name = max_name
        self.filename = filename
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def __init__(self):
        self.root = None

    def insert(self, node):
        if not self.root:
            self.root = node
        else:
            self.root = self._insert(self.root, node)

    def _insert(self, current, node):
        if not current:
            return node
        if node.min_name < current.min_name:
            current.left = self._insert(current.left, node)
        else:
            current.right = self._insert(current.right, node)

        current.height = 1 + max(self._get_height(current.left), self._get_height(current.right))
        balance = self._get_balance(current)

        if balance > 1 and node.min_name < current.left.min_name:
            return self._right_rotate(current)
        if balance < -1 and node.min_name > current.right.min_name:
            return self._left_rotate(current)
        if balance > 1 and node.min_name > current.left.min_name:
            current.left = self._left_rotate(current.left)
            return self._right_rotate(current)
        if balance < -1 and node.min_name < current.right.min_name:
            current.right = self._right_rotate(current.right)
            return self._left_rotate(current)

        return current

    def _left_rotate(self, z):
        y = z.right
        T2 = y.left
        y.left = z
        z.right = T2
        z.height = 1 + max(self._get_height(z.left), self._get_height(z.right))
        y.height = 1 + max(self._get_height(y.left), self._get_height(y.right))
        return y

    def _right_rotate(self, z):
        y = z.left
        T3 = y.right
        y.right = z
        z.left = T3
        z.height = 1 + max(self._get_height(z.left), self._get_height(z.right))
        y.height = 1 + max(self._get_height(y.left), self._get_height(y.right))
        return y

    def _get_height(self, node):
        if not node:
            return 0
        return node.height

    def _get_balance(self, node):
        if not node:
            return 0
        return self._get_height(node.left) - self._get_height(node.right)

def read_and_split_data(filename, batch_size):
    batches = []
    current_batch = []

    with open(filename, mode='r', encoding='utf-8') as file:
        reader = csv.reader(file)
        header = next(reader)
        for i, row in enumerate(reader):
            current_batch.append(row)
            if len(current_batch) == batch_size:
                batches.append(current_batch)
                current_batch = []
        if current_batch:
            batches.append(current_batch)
    return batches

def save_batches(batches):
    for i, batch in enumerate(batches):
        with open(f'batch_{i}.json', 'w') as f:
            json.dump(batch, f)

def serialize_tree(node):
    if not node:
        return None
    return {
        'min_name': node.min_name,
        'max_name': node.max_name,
        'filename': node.filename,
        'left': serialize_tree(node.left),
        'right': serialize_tree(node.right)
    }

def save_tree_to_json(tree_root, output_filename='tree_structure.json'):
    tree_data = serialize_tree(tree_root)
    with open(output_filename, 'w') as file:
        json.dump(tree_data, file, indent=4)

# Example usage
batches = read_and_split_data('final_players.csv', 100)
save_batches(batches)

tree = AVLTree()
for i, batch in enumerate(batches):
    min_name = min(batch, key=lambda x: x[6])[6]
    max_name = max(batch, key=lambda x: x[6])[6]
    filename = f'batch_{i}.json'
    tree.insert(TreeNode(min_name, max_name, filename))

save_tree_to_json(tree.root)
