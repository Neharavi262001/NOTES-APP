import express from 'express';
import validator from 'express-validator';
import {getNotes,getNoteByID,createNotes,updateNote,deleteNote} from '../../controllers/v1/notes.js'

import { authJWT } from '../../controllers/v1/auth.js';


const {body} = validator
const router=express.Router();

router.get('/',authJWT,getNotes)

router.post('/',authJWT,body('title').exists(),body('isDraft').isBoolean(),createNotes)

router.get('/:id',authJWT,getNoteByID)

router.delete('/:id',authJWT,deleteNote)

router.patch('/:id',authJWT,updateNote)


export default router;