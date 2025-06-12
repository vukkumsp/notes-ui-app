import { useLocation, useNavigate } from 'react-router-dom';
import './Note.css'

function Note({ key, note }) {
  const navigate = useNavigate();
  const location = useLocation();

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

        {location.pathname !== '/notes/' + note.id &&
          <button className="note-button" onClick={() => {
            console.log("Navigating to note with id: ", note.id);
            navigate('/notes/' + note.id);
          }}>Select</button>
        }

        {location.pathname !== '/' &&
          <button className="back-button" onClick={() => {
            console.log("Navigating to back to notes list");
            navigate('/');
          }}>Home</button>
        }
      </fieldset>
    </>
  )
}

export default Note
