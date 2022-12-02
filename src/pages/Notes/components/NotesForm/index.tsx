import { useNotesStore } from 'pages/Notes/store';
import React, { SyntheticEvent, useRef } from 'react';
import { TextInput, Button } from 'flowbite-react';

export const NotesForm = () => {
  const noteTitleRef = useRef<any>();

  const { createNote } = useNotesStore();

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = noteTitleRef.current;

    if (value.length) {
      createNote(value);
      noteTitleRef.current.value = '';
    }
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <TextInput
        id="note_title"
        placeholder="Add a note"
        ref={noteTitleRef}
        required
        className="w-full"
      />
      <Button>Add</Button>
    </form>
  );
};
