import React, { useState, useEffect } from 'react'

import './index.css'

export default function CreateArea(props) {

    const [ note, setNote ] = useState({
        title: '',
        content: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        
        setNote( (prevNote) => {
            return {
                ...prevNote,
                [ name ]: value
            }
        })
        console.log('JESUS ME AMA!')
    }
    // Criar uma arrow function em uma linha 
    const submitNote = (event) => {
        props.onAdd(note)

        setNote({
            title: '',
            content: ''
        })
        event.preventDefault()
    }

    return (
        <div className='area'>
            <form>
                <input 
                    name='title' 
                    value={note.title} 
                    placeholder='Título' 
                    id="input-form" 
                    onChange={handleChange}
                />
                <br />
                <textarea 
                    name='content' 
                    value={note.content} 
                    placeholder='Descrição do card!' 
                    rows='3'  
                    id="area-form"
                    onChange={handleChange}
                />
                <button id="btn" onClick={submitNote}>Click</button>
            </form>
        </div>
    )
}
