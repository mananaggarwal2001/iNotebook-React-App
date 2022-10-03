import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="card col-md-3 mx-3 my-3">
            <div className="card-body cardclasschange">
                <div>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
                <div className="d-flex iconclass">
                    <i className="fa-solid fa-trash-can mx-2"></i>
                    <i className="fa-solid fa-file-pen mx-2"></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem