interface IsrTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default async function IsrPage() {
  const todo: IsrTodo = await getData();
  return (
    <ul>
      <li> Id : {todo.id}</li>
      <li> userId : {todo.userId}</li>
      <li> title : {todo.title}</li>
      <li> completed : {todo.completed.toString()}</li>
    </ul>
  );
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/10", {
    next: { revalidate: 3 },
  });
  return res.json();
}
