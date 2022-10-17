const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.roots = null;
  }

  root() {
    return this.roots;
  }

  add(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.roots) {
      return;
    }
    let node = this.roots;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.roots) {
      return;
    }
    let node = this.roots;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
