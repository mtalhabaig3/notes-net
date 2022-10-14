import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NTUyNTNmYzJjNzQxZTNmZTVhMTc2In0sImlhdCI6MTY2NTQ4NzQ2NH0.PFviXaGm4xYMe48CkO21VQSgEaaMPtXlINCOmotZ9t4",
      },
    });
    const json = await response.json();
    // const note = {
    //   _id: "6346c80b358adbcef12482f675",
    //   user: "63455253fc2c741e3fe5a176",
    //   title: title,
    //   description: description,
    //   tag: "default",
    //   date: "2022-10-12T13:58:35.031Z",
    //   __v: 0,
    // };
    setNotes(json);
  };

  const addNote = async (title, description) => {
    console.log(title, description);
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NTUyNTNmYzJjNzQxZTNmZTVhMTc2In0sImlhdCI6MTY2NTQ4NzQ2NH0.PFviXaGm4xYMe48CkO21VQSgEaaMPtXlINCOmotZ9t4",
      },
      body: JSON.stringify({ title, description }),
    });
    const note = await response.json();
    console.log(note);
    setNotes(notes.concat(note));
  };

  const deleteNote = async (id) => {
    console.log("Deleting Note id:" + id);
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NTUyNTNmYzJjNzQxZTNmZTVhMTc2In0sImlhdCI6MTY2NTQ4NzQ2NH0.PFviXaGm4xYMe48CkO21VQSgEaaMPtXlINCOmotZ9t4",
      },
    });
    const json = response.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const editNote = async (id, title, description) => {
    console.log(id, title, description);
    console.log("here at edit note");
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0NTUyNTNmYzJjNzQxZTNmZTVhMTc2In0sImlhdCI6MTY2NTQ4NzQ2NH0.PFviXaGm4xYMe48CkO21VQSgEaaMPtXlINCOmotZ9t4",
      },
      body: JSON.stringify({ id, title, description }),
    });
    const json = response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
