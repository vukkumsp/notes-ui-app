import { useNavigate } from 'react-router-dom';
import './Note.css'

function Note({ key, note }) {
  const navigate = useNavigate();
  // {id, title, content, createdAt, updatedAt}
  return (
    <>
      <fieldset key={key} className="note">
        <legend>{". " + note.title + " ."}</legend>
        <small>
          created: {note.createdAt}
        </small>
        {note.updatedAt && note.updatedAt !== note.createdAt && 
        <small> 
          | updated: {note.updatedAt}
        </small>}
        <p>{note.content}</p>

        <button className="note-button" onClick={() => {
          console.log("Navigating to note with id: ", note.id);
          navigate('/notes/' + note.id, { replace: true });
        }}>SELECT</button>

        <button className="back-button" onClick={() => {
          console.log("Navigating to back to notes list");
          navigate('/', { replace: true });
        }}>HOME</button>
      </fieldset>
    </>
  )
}

export default Note
