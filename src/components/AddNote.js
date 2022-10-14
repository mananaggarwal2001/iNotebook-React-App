import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import NoteContext from '../contexts/notes/NoteContext';
import Alert from './Alert';
const AddNote = () => {
    const fetchedNotes = useContext(NoteContext);
    const { addNote } = fetchedNotes;

    const [Note, setNote] = useState({ title: "", description: "", tag: "default" });
    const onChange = (e) =>
    {
        setNote({ ...Note, [e.target.name]: e.target.value }); // spread operator is used for maintaing the existing note property and change of the new note is made in the original note.
    }
    const handleClick = (e) =>
    {
        // <Alert message="This is the default message"/>
        e.preventDefault();
        // addNote(Note.title, Note.description, Note.tag);
        addNote(Note.title, Note.description, Note.tag);

    }
    return (
        <div className="container my-3">
            <h3>Add a Note with love</h3>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" id="title" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name="description" id="description" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" name="Tag" id="Tag" onChange={onChange} />
                </div>
                <button className="btn btn-primary"  onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote