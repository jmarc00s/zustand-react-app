import { useNotesStore } from 'pages/Notes/store';
import React from 'react';
import { Note } from '../Note';

export const NoteGrid = () => {
  const { notes } = useNotesStore();
  return (
    <section className="mt-4">
      <h1 className="text-center text-xl font-semibold">Notes</h1>
      <p className="italic text-gray-400 text-center">
        (Click in a note to set as Done/Not done)
      </p>
      <div className="grid gap-2 grid-cols-5">
        {notes.map((note, index) => (
          <Note key={index} {...note} />
        ))}
      </div>
    </section>
  );
};
