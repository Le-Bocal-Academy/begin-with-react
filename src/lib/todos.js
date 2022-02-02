export const splitTodosByStatus = (todoList) => {
  // Return three lists : todo, doing, done
  const todo = [];
  const doing = [];
  const done = [];

  // @same as:
  // for (let i = 0; i < todoList.length; i++) {
  //   const item = todoList[i];
  for (const item of todoList) {
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

  // @same as return { todo: todo, doing: doing, done: done }
  return { todo, doing, done }
};
