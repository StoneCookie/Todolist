
const AddTodoItem = () => {
	return (
		<div className="create-item">
			<input className="create-item__input" type="text" placeholder="Название задачи" />

			<button className="create-item__button">Добавить</button>
		</div>
	);
}

export default AddTodoItem;
