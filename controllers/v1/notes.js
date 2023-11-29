import {v4 as uuidv4} from 'uuid';

let notes=[]

export const getNotes=(req,res)=>{
    res.send(notes)
}

export const createNotes=(req,res)=>{
    const note =req.body
    notes.push({...note,id:uuidv4()})
    res.send(`'created a note of title ${note.title}'`)
}

export const getNoteByID=(req,res)=>{
    const {id}=req.params;
    const note=notes.find((note)=>note.id===id)
    res.send(note)
}


export const deleteNote=(req,res)=>{
    const {id}=req.params;
    notes=notes.filter((note)=>note.id !=id)
    res.send(`A note  ${id} was deleted`)

}

export const updateNote=(req,res)=>{
    const {id}=req.params
    const {title,content,isDraft}=req.body
    const note=notes.find((note)=>note.id===id)

    if(title){
        note.title=title
    }
    if(content){
        note.content=content
    }
    if (isDraft){
        note.isDraft=isDraft
    }
    res.send(`updated ${id} successfully`)
}