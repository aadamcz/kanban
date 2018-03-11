import React, { PropTypes } from "react";
import Note from "./Note";
import styles from "./Notes.css";

const Notes = ({ notes, laneId, editNote, updateNote, deleteNote}) => {
	return (
		<Note id={note.id} key={note.id} editing={note.editing}>
			<Edit
				editing={note.editing}
				value={note.task}
				onValueClick={() => editNote(note.id)}
				onUpdate={task =>
					updateNote({
						...note,
						task,
						editing: false
					})
				}
				onDelete={() => deleteNote(note.id, laneId)}
			/>
		</Note>
	);
};

Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
};

export default Notes;
