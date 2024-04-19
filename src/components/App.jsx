import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// console.log(notes); to check if the notes from notes is passed or not

function createNote(notesItem) {
  return <Note 
      title = {notes.title}
      content = {notes.content}
  />
}

function App() {
  return (
    <div>
      <Header />
      {/* 2. add title & content in note */}
      {/* 4.change title & content for using map function to Loop
      from notes */}
       
        {/* title="This is the note title"
        content="This is the note content"
        create map function here
        abd pass the notrItem function here */}
        {notes.map(createNotes)}
      
      <Footer />
    </div>
  );
}

//1. create props for each card
//2. use arrow function
//3. 

export default App;
