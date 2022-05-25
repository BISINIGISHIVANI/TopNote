import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from "./hooks/context/auth-context";
import { NoteProvider } from "./hooks/context/note-context";
import { ArchiveNoteProvider } from "./hooks/context/archive-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router> 
      <NoteProvider>
      <ArchiveNoteProvider >
      <App />
      </ArchiveNoteProvider>
      </NoteProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
