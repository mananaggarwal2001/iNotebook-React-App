import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import NoteContext from '../contexts/notes/NoteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const fetchedNotes = useContext(NoteContext);
    const { notes, setNotes, getNotes } = fetchedNotes;

    useEffect(() => {
        getNotes();
    }, []);




    return (
        <>
            <AddNote />
            <div className="modal" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">

                <h3>Your Notes</h3>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote= {updateNote} />;
                })}
            </div>
        </>

    )
}

export default Notes;
