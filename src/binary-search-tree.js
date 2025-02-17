const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  // get root
  root() {
    return this._root;
  }
  // add
  add(data) {
    this._root = this._addNode(this._root, data);
  }
  _addNode(node, data) {
    if (!node) {
      return new Node(data);
    }
    if (data < node.data) {
      node.left = this._addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._addNode(node.right, data);
    }
    return node;
  }

  // has
  has(data) {
    return this._hasNode(this._root, data);
  }
  _hasNode(node, data) {
    if (!node) return false;
    if (data === node.data) return true;
    return data < node.data
      ? this._hasNode(node.left, data)
      : this._hasNode(node.right, data);
  }

  // find
  find(data) {
    return this._findNode(this._root, data);
  }
  _findNode(node, data) {
    if (!node) return null;
    if (data === node.data) return node;
    return data < node.data
      ? this._findNode(node.left, data)
      : this._findNode(node.right, data);
  }

  // remove
  remove(data) {
    this._root = this._removeNode(this._root, data);
  }
  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      let successor = this._minNode(node.right);
      node.data = successor.data;
      node.right = this._removeNode(node.right, successor.data);
    }
    return node;
  }

  // min
  min() {
    if (!this._root) return null;
    return this._minNode(this._root).data;
  }
  _minNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // max
  max() {
    if (!this._root) return null;

    return this._maxNode(this._root).data;
  }
  _maxNode(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree,
};
