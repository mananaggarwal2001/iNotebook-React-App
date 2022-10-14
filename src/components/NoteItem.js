import React, { useContext } from 'react'
import NoteContext from '../contexts/notes/NoteContext';

const NoteItem = (props) => {
    const {note, updateNote}= props; // dereferencing the props state for getting the note as passed in the note state.
    const context= useContext(NoteContext);
    const {notes,deleteNote}= context;

    return (
        <div className="card col-md-3 mx-3 my-3">
            <div className="card-body cardclasschange">
                <div>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
                <div className="d-flex iconclass">
                    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-file-pen mx-2" onClick={()=>{updateNote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem