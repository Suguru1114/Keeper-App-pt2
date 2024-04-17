import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

console.log(notes);

function App() {
  return (
    <div>
      <Header />
      {/* add title & content in note */}
      <Note 
        title="This is the note title"
        content="This is the note content"
      />
      <Footer />
    </div>
  );
}

//1. create props for each card
//2. use arrow function
//3. 

export default App;
