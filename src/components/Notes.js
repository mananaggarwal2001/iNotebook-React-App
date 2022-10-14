import React from 'react'
import { useEffect } from 'react';
import { useContext, useRef, useState } from 'react';
import NoteContext from '../contexts/notes/NoteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const fetchedNotes = useContext(NoteContext);
    const { notes, setNotes, getNotes } = fetchedNotes;

    useEffect(() => {
        getNotes();
    }, []);

    const reference = useRef(null);
    const refClose= useRef(null);
    const [Note, setNote] = useState({ id: "" , etitle: "", edescription: "", etag: "" });
    const updateNote = (currentnote) => {
        reference.current.click();
        setNote({id: currentnote._id,   etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag});
    }
    const { addNote } = fetchedNotes;

    const onChange = (e) =>
    {
        setNote({ ...Note, [e.target.name]: e.target.value }); // spread operator is used for maintaing the existing note property and change of the new note is made in the original note.
    }
    const handleClick = (e) =>
    {
        // <Alert message="This is the default message"/>
        e.preventDefault();
        // addNote(Note.title, Note.description, Note.tag);
        console.log("Updating the note in my note app for the future use");


    }



    return (
        <>
            <AddNote />
            <button ref={reference} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Note Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" name="etitle" value={Note.etitle} id="title" aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" value={Note.edescription} name="edescription" id="description" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" name="eTag" value={Note.etag} id="Tag" onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">

                <h3>Your Notes</h3>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote} />;
                })}
            </div>
        </>

    )
}

export default Notes;
