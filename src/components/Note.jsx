import React from "react";

//1.add props in Note()
function Note(props) {
  return (
    <div className="note">

    {/* 2. add{props.title} */}

      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
