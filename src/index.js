import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from "./hooks/context/auth-context";
import { NoteProvider } from "./hooks/context/note-context";
import { ArchiveNoteProvider } from "./hooks/context/archive-context";
import { TrashProvider } from "./hooks/context/trash-context";
import { FilterProvider } from "./hooks/context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router> 
        <FilterProvider>
          <NoteProvider>
              <ArchiveNoteProvider>
                <TrashProvider>
                  <App />
                </TrashProvider>
              </ArchiveNoteProvider>
          </NoteProvider>
        </FilterProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
