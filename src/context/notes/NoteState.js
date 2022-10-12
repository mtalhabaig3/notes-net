import noteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    name: "Talha",
    religion: "Muslim",
  };
  return (
    <noteContext.Provider value={state}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;
