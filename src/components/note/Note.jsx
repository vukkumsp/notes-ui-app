import { useLocation, useNavigate } from 'react-router-dom';
import './Note.css'
import { useEffect, useRef, useState } from 'react';
import { addOrUpdateNote, deleteNotes } from '../../services/rest/noteService';
import { getCookie } from '../../services/cookieManagement';

function Note({ key, note, mode= 'view' }) {
  // mode can be 'view' or 'edit' or 'add'
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = getCookie("loginToken") !== "" ? true : false; // Check if the user is loggedin

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const fieldsetRef = useRef(null);

  useEffect(() => {
    if (mode === 'add') {
      setEditMode(true);
    }
  },[]);

  const saveNote = () => {
    // Here you would typically save the note to the server
    // For now, we will just log it
    console.log("Note saved:", { id: note.id, title, content });
    note.title = title;
    note.content = content;
    note.updatedAt = new Date().toISOString();
    addOrUpdateNote(note, 'PUT'); //PUT to update the note
    setEditMode(false);
  }

  const addNote = () => {
    // Here you would typically save the note to the server
    // For now, we will just log it
    console.log("Note added:", { id: note.id, title, content });
    note.title = title;
    note.content = content;
    note.created = new Date().toISOString();
    note.updatedAt = new Date().toISOString();
    note.id = null;
    addOrUpdateNote(note, 'POST'); //POST to add a new note
    setEditMode(false);
  }

  const deleteNote = () => {
    console.log("Deleting note with id: ", note.id);
    deleteNotes(note.id); //DELETE the note
    fieldsetRef.current.innerHTML = '<legend>DELETED</legend><p>This note is deleted</p>';
    console.log("Note deleted:", note.id);

  }

  // {id, title, content, createdAt, updatedAt}
  return (
    <>
      <fieldset key={key} className="note" ref={fieldsetRef}
        style={{ 
          display: 'block',
          cursor: location.pathname === '/notes-ui-app/' ? 'pointer': 'default'
        }}
        onClick={() => {
          if (location.pathname === '/notes-ui-app/') {
            console.log("Navigating to note with id: ", note.id);
            navigate('/notes-ui-app/notes/' + note.id);
          }
        }}>
        {/* <div className="note-label" style={{display: 'block', cursor: 'pointer'}}> */}

        {!editMode &&
        <legend>{note.title}</legend> }

        { editMode && 
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>}
        { editMode && <br/> }
        
        <small>
          created: {note.createdAt}
        </small>
        {note.updatedAt && note.updatedAt!== "" && note.updatedAt !== note.createdAt && 
        <small> 
          | updated: {note.updatedAt}
        </small>}

        {!editMode &&
        <p>{note.content}</p> }

        { editMode && <br/> }

        { editMode &&
        <textarea className="note-content" rows="10" cols="100" value={content} onChange={(e)=>setContent(e.target.value)} readOnly={!editMode}></textarea> }

        { editMode && <br/> }

        { isAdmin && location.pathname !== '/notes-ui-app/' &&
          <button className="note-button" onClick={() => {
            deleteNote()
          }}>Delete</button>}

        {/* {location.pathname !== '/notes/' + note.id &&
          <button className="note-button" onClick={() => {
            console.log("Navigating to note with id: ", note.id);
            navigate('/notes/' + note.id);
          }}>Select</button>
        } */}

        {!editMode && location.pathname !== '/notes-ui-app/' && isAdmin &&
          <button className="note-button" onClick={() => {
            console.log("Editing note with id: ", note.id);
            setEditMode(true);
            setTitle(note.title);
            setContent(note.content);
          }
          }>Edit</button>
        }

        {editMode &&
          <button className="note-button" onClick={() => {
            setEditMode(false);
            setTitle(note.title);
            setContent(note.content);
          }
          }>Cancel</button>
        }

        {editMode && mode !== 'add' && isAdmin &&
          <button className="note-button" onClick={() => {
            console.log("Saving note with id: ", note.id);
            // Here you would typically save the note to the server
            // For now, we will just log it
            console.log("Note saved:", { id: note.id, title, content });
            setEditMode(false);
            setTitle(note.title);
            setContent(note.content);
            saveNote();
          }}>Save</button>
        }

        {editMode && mode === 'add' && isAdmin &&
          <button className="note-button" onClick={() => {
            console.log("Saving note with id: ", note.id);
            // Here you would typically save the note to the server
            // For now, we will just log it
            console.log("Note saved:", { id: note.id, title, content });
            setEditMode(false);
            setTitle(note.title);
            setContent(note.content);
            addNote();
          }}>Add</button>
        }

        {location.pathname !== '/notes-ui-app/' &&
          <button className="back-button" onClick={() => {
            console.log("Navigating to back to notes list");
            navigate('/notes-ui-app/');
          }}>Home</button>
        }
        {/* </div> */}
      </fieldset>
    </>
  )
}

export default Note
