export const splitTodosByStatus = (todoList) => {
  // Return three lists : todo, doing, done
  const todo = [];
  const doing = [];
  const done = [];

  for (let i = 0; i < todoList.length; i++) {
    const item = todoList[i];
    switch (item.status) {
      case "todo":
        todo.push(item);
        break;
      case "doing":
        doing.push(item);
        break;
      case "done":
        done.push(item);
        break;
      default:
        todo.push({ ...item, status: "todo" });
    }
  }

  // return { todo: todo, doing: doing, done: done }
  return { todo, doing, done }
};
