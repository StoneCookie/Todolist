import { ChangeEvent, KeyboardEvent, useState } from "react";

type EditableSpanType = {
	title: string
	editMode: boolean
	onChangeTitle: (newValue: string) => void
	onChangeEditMode: (newValue: boolean) => void
}

const EditableSpan = (props: EditableSpanType) => {
	const [title, setTitle] = useState(props.title);

	function onChangeTitleHandler(event: ChangeEvent<HTMLInputElement>) {
		setTitle(event.currentTarget.value);
	}

	function activateViewMode() {
		props.onChangeEditMode(false);
		title ? props.onChangeTitle(title) : alert('Значение не может быть пустым');
	}

	function onKeyDownHandler(event: KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			activateViewMode();
		}
	}

	return (
		props.editMode ? (
			<input
				className="list__edit-input"
				type="text"
				value={title}
				onKeyDown={onKeyDownHandler}
				onInput={onChangeTitleHandler}
				onBlur={activateViewMode}
			/>
		) : (
			<span className="check__title">{props.title}</span>
		)

	);
}

export default EditableSpan;
