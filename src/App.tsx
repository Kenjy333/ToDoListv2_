import React, { useState } from "react";
import Note from "./Note/Notes";
import DivMaker from "./functiions/divMaker";
import "./globals.css";
import handleKey from "./functiions/handleKey";

const App = () => {
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState([]);

  const handleKey = (event) => {
    // console.log(event.key); ----- sluzy do wypisania jaki przycisk zostal nacisniety

    if (event.key === "Enter") {
      // // sprawdza czy zostal nacisniety przycisk enter
      // event.preventDefault(); //sluzy do zapobiegniecia odswiezenia strony po kliknieciu
      // console.log(message); // sluzy do wypisania tekstu jaki wpisalismy przed nacisnieciem enter
      // setMessage("");

      setNotes([...notes, message]);
      setMessage("");
    }
  };

  return (
    <>
      <div className="cont">
        <input
          name="textInput"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKey}
          className="w-input"
          placeholder="The text of your note"
        />

        <main className="main-cont flex flex-wrap">
          {notes.map((note, index) => (
            <DivMaker key={index} content={note} />
          ))}
        </main>
      </div>
    </>
  );
};

export default App;
