import { Fragment, useState } from "react";
import AddTodoItem from "../AddTodoItem/AddTodoItem";
import TodoList from "../TodoList/TodoList";

export type TodosType = {
	id: number
	title: string
	isDone: boolean
}

if (localStorage.getItem('todos') === null) {
	setTodosStorage([]);
}

function setTodosStorage(todos: Array<TodosType>) {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodosStorage(): Array<TodosType> {
	return JSON.parse(localStorage.getItem('todos') || '');
}

const Home = () => {
	const [todos, setTodosState] = useState<Array<TodosType>>(getTodosStorage());

	function addTodoItem(title: string) {
		let newTodoItem = { id: Date.now(), title: title.trim(), isDone: false };
		let resultTodos = [newTodoItem, ...todos];

		setTodosStorage(resultTodos);
		setTodosState(resultTodos);
	}

	function deleteTodoItem(id: number) {
		let resultTodos = todos.filter(todo => todo.id !== id);

		setTodosStorage(resultTodos);
		setTodosState(resultTodos);
	}

	function changeStatusTodo(id: number, isDone: boolean) {
		let todoItem = todos.find(todo => todo.id === id);
		if (todoItem) {
			const copy = [...todos]
			todoItem.isDone = isDone;

			setTodosStorage(copy);
			setTodosState(copy);
		}
	}

	function changeTitleTodo(id: number, title: string) {
		let todoItem = todos.find(todo => todo.id === id);
		if (todoItem) {
			const copy = [...todos]
			todoItem.title = title;

			setTodosStorage(copy);
			setTodosState(copy);
		}
	}

	console.log(todos);


	return (
		<Fragment>
			<AddTodoItem addTodoItem={addTodoItem} />
			<TodoList
				todos={todos}
				deleteTodoItem={deleteTodoItem}
				changeStatusTodo={changeStatusTodo}
				changeTitleTodo={changeTitleTodo} />
		</Fragment>
	);
}

export default Home;
