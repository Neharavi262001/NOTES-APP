import express from 'express';
import {getNotes,getNoteByID,createNotes,updateNote,deleteNote} from '../../controllers/v1/notes.js'


const router=express.Router();

router.get('/',getNotes)

router.post('/',createNotes)

router.get('/:id',getNoteByID)

router.delete('/:id',deleteNote)

router.patch('/:id',updateNote)


export default router;