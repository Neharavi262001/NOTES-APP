import express  from 'express';
import bodyParser from 'body-parser'
import {getNotes,getNoteByID,createNotes,updateNote,deleteNote} from './controllers/v1/notes.js'
import {getNotes2} from './controllers/v2/notes.js'

const app=express()

const port =3000;



app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/v2/notes',getNotes2)

app.get('/v1/notes',getNotes)

app.post('/v1/notes',createNotes)

app.get('/v1/notes/:id',getNoteByID)

app.delete('/v1/notes/:id',deleteNote)

app.patch('/v1/notes/:id',updateNote)

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})