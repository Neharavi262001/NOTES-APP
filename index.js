import express  from 'express';
import bodyParser from 'body-parser'
import notesRoutesv1 from './routes/v1/node.js'
import notesRoutesv2 from './routes/v2/node.js'


const app=express()

const port =3000;



app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/v1/notes',notesRoutesv1)
app.use('/v2/notes',notesRoutesv2)




app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})