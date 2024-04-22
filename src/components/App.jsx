import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// console.log(notes); to check if the notes from notes is passed or not

//create arrow function to mive this function inside
//  {notes.map(createNote)}
// function createNote(noteItem) {
//   return <Note 
//       key = {noteItem.key}
//       title = {noteItem.title}
//       content = {noteItem.content}
//   />
// }

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
        {notes.map( (noteItem) => <Note 
      key = {noteItem.key}
      title = {noteItem.title}
      content = {noteItem.content}
  />
)}
      
      <Footer />
    </div>
  );
}

//1. create props for each card
//2. use arrow function
//3. 

export default App;
