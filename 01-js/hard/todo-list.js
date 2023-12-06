/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor() {
    this.todoList = [];
  }
  add(a) {
    this.todoList.push(a);
  }

  remove(a) {
    this.todoList.splice(a, 1);
  }

  update(a, b) {
    if (a === 0 || a < this.todoList.length) {
      this.todoList[a] = b;
    }
  }

  getAll() {
    return this.todoList;
  }

  get(a) {
    if (a === 0 || a < this.todoList.length) {
      return this.todoList[a];
    }
    else {
      return null;
    }
  }

  clear() {
    this.todoList = [];
  }

}

module.exports = Todo;
