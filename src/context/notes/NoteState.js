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
  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
