/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';

import {useEffect, useState} from 'react';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';

function App() {

  const [notes, setNotes] = useState([{
    title: 'jojn',
    content: 'asdasfasdjfopasjdfoijasoidfjoaisdjfioasjdfoijasdoifjaoisdjfoiasjdfasdasdsdafasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
  },
  {
    title: 'jojn',
    content: 'asdasfasdjfopasjdfoijasoidfjoaisdjfioasjdfoijasdoifjaoisdjfoiasjdfasdasdsdafasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
  },
  {
    title: 'jojn',
    content: 'asdasfasdjfopasjdfoijasoidfjoaisdjfioasjdfoijasdoifjaoisdjfoiasjdfasdasdsdafasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
  },
  {
    title: 'jojn',
    content: 'asdasfasdjfopasjdfoijasoidfjoaisdjfioasjdfoijasdoifjaoisdjfoiasjdfasdasdsdafasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
  },
    ]);

    useEffect(async() => {
      const theNotes = await fetch("http://34.244.150.150:80/notes", {
        "headers":{
          "Access-Control-Allow-Origin":"*",
          "Content-Type": "application/json",
        }
      });
      const jsonNotes = await theNotes.json();
      setNotes(jsonNotes.message);

    }, [])

  return (
    <div className="App">
      <InputSection setNotes={setNotes}/>
      <OutputSection notes={notes}/>
    </div>
  );
}

export default App;
