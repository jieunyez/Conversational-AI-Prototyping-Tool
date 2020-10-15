import React, { useState } from 'react';
import { Affix, Button } from 'antd';
import Note from  './components/Note';
import Writing from  './components/Writing';
import './App.css';

function App() {
  const [fields, setFields] = useState([]);
  const [isNotes, setIsNotes] = useState([]);
  const [top, setTop] = useState(10);

  function handleAddNote() {
    const cell_types = [...isNotes];
    cell_types.push(true);
    setIsNotes(cell_types);

    const values = [...fields];
    values.push({ value: null });
    setFields(values);

    console.log(values);
  }

  function handleAddWrite() {
    const cell_types = [...isNotes];
    cell_types.push(false);
    setIsNotes(cell_types);

    const values = [...fields];
    values.push({ value: null });
    setFields(values);

    console.log(values);
  }



  function handleBRemove(i) {
    console.log(``);
    const values = [...fields];
    const cell_types = [...isNotes];


  
    values.splice(i, 1);
    setFields(values);
    cell_types.splice(i, 1);
    setIsNotes(cell_types);
    //handleNoteRm();
  }

  return (
    <div className="App">
    <Affix offsetTop={top}>
        <Button type="dashed" onClick={() => handleAddWrite()}>+Write</Button>
        <Button type= "dashed" onClick={() => handleAddNote()}>+Note</Button>
    </Affix>
    {/* <Button type="dashed" onClick={() => handleAddWrite()}>+Write</Button> */}
    {/* <Button type= "dashed" onClick={() => handleAddNote()}>+Note</Button> */}
    {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            {isNotes[idx]? 
            <Note />
            : <Writing />}
            <Button type= "dashed" size= "small" onClick={() => handleBRemove(idx)} danger>
              x Delete the Above Section {idx}
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
