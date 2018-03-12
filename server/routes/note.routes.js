import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);

//Delete a note
router.route('/notes').delete(NoteController.deleteNote);

//Update a note
router.route('/notes').put(NoteController.updateNote);

export default router;

/*
DELETE /notes/:noteId — usunięcie notki z linii
PUT /notes/:noteId — update notki
*/

