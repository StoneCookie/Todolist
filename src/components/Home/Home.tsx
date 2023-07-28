import AddTodoItem from "../AddTodoItem/AddTodoItem";
import TodoList from "../TodoList/TodoList";

const Home = () => {
	return (
		<main className="content">
			<AddTodoItem />
			<TodoList />
		</main>
	);
}

export default Home;
