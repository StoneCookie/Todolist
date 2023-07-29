import { ChangeEvent, KeyboardEvent, useState } from "react";

type AddTodoItemType = {
	addTodoItem: (title: string) => void
}

const AddTodoItem = (props: AddTodoItemType) => {
	const [newTaskTitle, setNewTaskTitle] = useState('');

	function onNewTaskChangeHandler(event: ChangeEvent<HTMLInputElement>) {
		setNewTaskTitle(event.currentTarget.value)
	}

	function onKeyDownHandler(event: KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter' && validateNewTaskTitle()) {
			props.addTodoItem(newTaskTitle);
			clearInput();
		}
	}

	function addNewTaskHandler() {
		if (validateNewTaskTitle()) {
			props.addTodoItem(newTaskTitle);
			clearInput();
		}
	}

	function validateNewTaskTitle() {
		if (newTaskTitle.trim() === '') {
			alert('Введите корректное описание задачи');

			return false;
		}

		return true;
	}

	function clearInput() {
		setNewTaskTitle('')
	}

	return (
		<div className="content__item create-item">
			<input
				className="create-item__input"
				type="text" placeholder="Название задачи"
				value={newTaskTitle}
				onInput={onNewTaskChangeHandler}
				onKeyDown={onKeyDownHandler} />

			<button className="create-item__button" onClick={addNewTaskHandler}>Добавить</button>
		</div>
	);
}

export default AddTodoItem;
