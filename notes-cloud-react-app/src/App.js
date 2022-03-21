import './App.css';

import {useEffect, useState} from 'react';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';

function App() {

  const [notes, setNotes] = useState([
    {
        title:"First title",
        text: "First text",
    },
    {
        title:"Seoncd title",
        text: "Second text",
    },
    {
        title:"First title",
        text: "First text",
    },
    {
        title:"Seoncd title",
        text: "Second text",
    },
    {
        title:"First title",
        text: "First text",
    },
    {
        title:"Seoncd title",
        text: "Second text",
    },]);

    useEffect(() => {
      notes.forEach(note=>console.log(note))
    }, [notes])

  return (
    <div className="App">
      <InputSection setNotes={setNotes} notes={notes}/>
      <OutputSection notes={notes}/>
    </div>
  );
}

export default App;
