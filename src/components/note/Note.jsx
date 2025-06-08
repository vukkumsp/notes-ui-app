import './Note.css'

function Note({id, content}) {

  return (
    <>
    <fieldset>
        <legend>ID: {id}</legend>
        <p>{content}</p>
    </fieldset>
    </>
  )
}

export default Note
