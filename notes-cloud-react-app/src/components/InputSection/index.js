import {useEffect, useState, useRef} from 'react';
import './index.css';

const InputSection = ({setNotes, notes}) => {

    const [title, setTitle] = useState("");
    const [newNote, setNewNote] = useState("");
    
    const error = useRef(null); 

    const sendNote = async(e) => {
        e.preventDefault();

        if(title === ""){
            setTitle("Untitled");
        }

        if(newNote === ""){
            error.current.style.visibility="visible";
        }else {
            error.current.style.visibility="hidden";
        
            // const notes = await fetch(``, {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body:{
            //         title: title,
            //         newNote: newNote
            //     }
            //   });
            //   const jsonNotes = await notes.json();
              console.log("enters")
    
            //   setNotes(state => state.push(JSON.parse(jsonNotes)));
              setNotes([...notes, {title: "title", text: "text"}]);
            
        }   

        

    }


    return (
        <div className='input-section'>
            <h2>Add a new note</h2>
            <div className="add-note-container">
                <form className="add-note-form">
                    <input type="text" placeholder="Enter title..." id="input-section-title" onChange={e => setTitle(e.target.value)}/>
                    <textarea id="textarea"  rows="6" cols="50" placeholder="Enter note..." onChange={e => setNewNote(e.target.value)}/>
                    <div id="input-section-bottom">
                        
                        <span id="input-error" ref={error}>
                            Text is required!!
                        </span>
                    
                    <input type="submit" value="Submit" id="input-section-submit" onClick={sendNote}/>
                 
                 </div>
                </form>
            </div>
        </div>
    );
}

export default InputSection;