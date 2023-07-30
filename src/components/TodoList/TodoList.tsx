import TodoItem from "./Todoitem";
import type { TodosType } from "../Home/Home";

type TodoListType = {
	todos: Array<TodosType>
	deleteTodoItem: (id: number) => void
	changeStatusTodo: (id: number, isDone: boolean) => void
	changeTitleTodo: (id: number, newValue: string) => void
}

const TodoList = (props: TodoListType) => {

	return (
		<div className="list-wrapper content__item">
			<h1 className="list-wrapper__title title">Todo List</h1>
			{props.todos.length === 0 ? (
				<h2 className="list-wrapper__sub-title sub-title">Список пустой, добавьте новую запись!</h2>
			) : (
				<ul className="list">
					{
						props.todos.map(todo => {

							return <TodoItem
								key={todo.id}
								todo={todo}
								deleteTodoItem={props.deleteTodoItem}
								changeStatusTodo={props.changeStatusTodo}
								changeTitleTodo={props.changeTitleTodo} />
						})
					}
				</ul>
			)}
		</div>
	);
}

export default TodoList;
