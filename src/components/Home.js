import React from 'react'
import { useContext } from 'react';
import NoteContext from '../contexts/notes/NoteContext';
import AddNote from './AddNote';
import Note from './Notes';
const Home = () => {


  return (
    <div>
      <Note />
    </div>
  )
}

export default Home;
