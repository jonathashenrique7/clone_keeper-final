import React, { useState } from 'react'

import CreateArea from './CreateArea'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'

import './index.css'

export default function App() {

  const [ notes, setNotes ] = useState([])

  const addNote = (newNote) => {
    setNotes( (prevNotes) => {
      return [...prevNotes, newNote]
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter( (noteItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      { notes.map((item, index) => {
        return (
          <Note 
            key={ index }
            id={ index }
            title={ item.title } 
            content={ item.content } 
            onDelete={deleteNote}
          />
        )
      }) }
      
     <Footer />
    </div>
  )
}
