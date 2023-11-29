let notes=[]

export const getNotes2=(req,res)=>{
    console.log(notes)
    res.send(notes)
}