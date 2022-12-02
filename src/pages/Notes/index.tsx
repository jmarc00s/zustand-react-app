import React from 'react';
import { NotesForm } from './components/NotesForm';
import { NoteGrid } from './components/NotesGrid';
import { useNotesStore } from './store';

const NotesPage = () => {
  return (
    <>
      <NotesForm />
      <NoteGrid />
    </>
  );
};

export default NotesPage;
