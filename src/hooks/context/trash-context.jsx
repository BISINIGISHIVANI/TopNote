import { createContext, useContext, useState } from "react";
const TrashContext = createContext(null);
const TrashProvider = ({ children }) => {
  const [trashNote, setTrashNote] = useState([]);
  return (
    <TrashContext.Provider value={{ trashNote, setTrashNote }}>
      {children}
    </TrashContext.Provider>
  );
};
const useTrash = () => useContext(TrashContext);
export { TrashProvider, useTrash };
