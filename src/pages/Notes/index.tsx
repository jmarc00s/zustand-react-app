import React from 'react';
import { NotesForm } from './components/NotesForm';
import { NoteGrid } from './components/NotesGrid';

const NotesPage = () => {
  return (
    <>
      <NotesForm />
      <NoteGrid />
    </>
  );
};

export default NotesPage;
