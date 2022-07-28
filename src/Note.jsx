import React from 'react'

import './index.css'

export default function Note(props) {

    const handleClick = () => {
        props.onDelete(props.id)
    }

    return (
        <div className='container'>
            <div className='noteStyle'>
                <h2>{ props.title }</h2>
                <p>{ props.content }</p>
                <button 
                    id="btn-del"
                    onClick={handleClick}
                >
                    Excluir
                </button>
            </div>
        </div>
    )
}
