import React from 'react'
import NoteContext from './NoteContext'
import { useState } from 'react';
const NoteState = (props) => {
    const notesIntial=[{
        "_id": "63276ec25d9e7b26b6345797",
        "user": "6321fdd39ab26d93b007cc26",
        "title": "my title",
        "description": "my First testing note used for checking the request",
        "tag": "Manan is a good boy",
        "date": "2022-09-18T19:17:22.363Z",
        "__v": 0
      },
      {
        "_id": "632b56ffe2717ac966a13a8d",
        "user": "6321fdd39ab26d93b007cc26",
        "title": "my title",
        "description": "my First testing note used for checking the request",
        "tag": "Manan is a good boy",
        "date": "2022-09-21T18:25:03.104Z",
        "__v": 0
      },
      {
        "_id": "632b56ffe2717ac966a13a8d",
        "user": "6321fdd39ab26d93b007cc26",
        "title": "my title",
        "description": "my First testing note used for checking the request",
        "tag": "Manan is a good boy",
        "date": "2022-09-21T18:25:03.104Z",
        "__v": 0
      },
      {
        "_id": "632b56ffe2717ac966a13a8d",
        "user": "6321fdd39ab26d93b007cc26",
        "title": "my title",
        "description": "my First testing note used for checking the request",
        "tag": "Manan is a good boy",
        "date": "2022-09-21T18:25:03.104Z",
        "__v": 0
      },
      {
        "_id": "632b56ffe2717ac966a13a8d",
        "user": "6321fdd39ab26d93b007cc26",
        "title": "my title",
        "description": "my First testing note used for checking the request",
        "tag": "Manan is a good boy",
        "date": "2022-09-21T18:25:03.104Z",
        "__v": 0
      },
      {
        "_id": "632b56ffe2717ac966a13a8d",
        "user": "6321fdd39ab26d93b007cc26",
        "title": "my title",
        "description": "my First testing note used for checking the request",
        "tag": "Manan is a good boy",
        "date": "2022-09-21T18:25:03.104Z",
        "__v": 0
      },
      {
        "_id": "632b56ffe2717ac966a13a8d",
        "user": "6321fdd39ab26d93b007cc26",
        "title": "my title",
        "description": "my First testing note used for checking the request",
        "tag": "Manan is a good boy",
        "date": "2022-09-21T18:25:03.104Z",
        "__v": 0
      },
      {
        "_id": "632b56ffe2717ac966a13a8d",
        "user": "6321fdd39ab26d93b007cc26",
        "title": "my title",
        "description": "my First testing note used for checking the request",
        "tag": "Manan is a good boy",
        "date": "2022-09-21T18:25:03.104Z",
        "__v": 0
      },
      {
        "_id": "632b56ffe2717ac966a13a8d",
        "user": "6321fdd39ab26d93b007cc26",
        "title": "my title",
        "description": "my First testing note used for checking the request",
        "tag": "Manan is a good boy",
        "date": "2022-09-21T18:25:03.104Z",
        "__v": 0
      },
      {
        "_id": "632b56ffe2717ac966a13a8d",
        "user": "6321fdd39ab26d93b007cc26",
        "title": "my title",
        "description": "my First testing note used for checking the request",
        "tag": "Manan is a good boy",
        "date": "2022-09-21T18:25:03.104Z",
        "__v": 0
      },
    ];

    const [Notes, setNotes] = useState(notesIntial)

    return (
        <NoteContext.Provider  value={{Notes, setNotes}}>
            {props.children};
        </NoteContext.Provider>
    )


}

export default NoteState;