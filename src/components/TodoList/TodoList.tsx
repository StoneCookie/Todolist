import TodoItem from "./TodoItem/Todoitem";

const Home = () => {
	return (
		<div className="list-wrapper">
			<h1 className="list-wrapper__title">Todo List</h1>
			<ul className="list">
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</ul>
		</div>
	);
}

export default Home;
