import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="card col-md-3 mx-3 my-3">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    )
}

export default NoteItem