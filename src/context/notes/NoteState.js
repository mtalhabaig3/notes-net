import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6346c7db358adbcef12482f8",
      user: "63455253fc2c741e3fe5a176",
      title: "My First Note",
      description: "first note in smart notes",
      tag: "personel",
      date: "2022-10-12T13:57:47.240Z",
      __v: 0,
    },
    {
      _id: "6346c80b358adbcef12482f9",
      user: "63455253fc2c741e3fe5a176",
      title: "My Second Note",
      description: "second note in smart notes",
      tag: "personel",
      date: "2022-10-12T13:58:35.031Z",
      __v: 0,
    },
    {
      _id: "6346c80b358adbcef12482f10",
      user: "63455253fc2c741e3fe5a176",
      title: "My Second Note",
      description: "second note in smart notes",
      tag: "personel",
      date: "2022-10-12T13:58:35.031Z",
      __v: 0,
    },
    {
      _id: "6346c80b358adbcef12482f11",
      user: "63455253fc2c741e3fe5a176",
      title: "My Second Note",
      description: "second note in smart notes",
      tag: "personel",
      date: "2022-10-12T13:58:35.031Z",
      __v: 0,
    },
    {
      _id: "6346c7db358adbcef12482f12",
      user: "63455253fc2c741e3fe5a176",
      title: "My First Note",
      description: "first note in smart notes",
      tag: "personel",
      date: "2022-10-12T13:57:47.240Z",
      __v: 0,
    },
    {
      _id: "6346c80b358adbcef12482f13",
      user: "63455253fc2c741e3fe5a176",
      title: "My Second Note",
      description: "second note in smart notes",
      tag: "personel",
      date: "2022-10-12T13:58:35.031Z",
      __v: 0,
    },
    {
      _id: "6346c80b358adbcef12482f14",
      user: "63455253fc2c741e3fe5a176",
      title: "My Second Note",
      description: "second note in smart notes",
      tag: "personel",
      date: "2022-10-12T13:58:35.031Z",
      __v: 0,
    },
    {
      _id: "6346c80b358adbcef12482f15",
      user: "63455253fc2c741e3fe5a176",
      title: "My Second Note",
      description: "second note in smart notes",
      tag: "personel",
      date: "2022-10-12T13:58:35.031Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  const addNote = (title, description) => {
    const note = {
      _id: "6346c80b358adbcef12482f675",
      user: "63455253fc2c741e3fe5a176",
      title: title,
      description: description,
      tag: "default",
      date: "2022-10-12T13:58:35.031Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  const deleteNote = (id) => {
    console.log("Deleting Note id:" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const editNote = () => {};
  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
