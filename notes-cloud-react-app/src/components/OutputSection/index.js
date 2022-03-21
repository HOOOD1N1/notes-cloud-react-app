import {useEffect, useState} from 'react';
import './index.css';


const OutputSection = ({notes}) => {
 

    return (
        <div className='output-section'>
            {notes.map(note => {
                return <div className='notes-container'>
                    <div id="note-title">
                        {note.title}
                    </div>
                    <div id="note-text">
                        {note.text}
                    </div>
                </div>
            })}
        </div>
    );
}

export default OutputSection;