import './Note.css'

function Note({key, note}) {
// {id, title, content, createdAt, updatedAt}
  return (
    <>
    <fieldset key={key} className="note">
        <legend>{note.title}</legend>
        <small>created: {note.createdAt}</small> 
            {note.updatedAt && <small> | updated: {note.updatedAt}</small>}
        <p>{note.content}</p>
    </fieldset>
    </>
  )
}

export default Note
