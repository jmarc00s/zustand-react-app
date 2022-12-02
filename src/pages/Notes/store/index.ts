import create from 'zustand';
import { Note } from '../models';

interface NotesState {
  notes: Note[];
  createNote: (title: string) => void;
  toggleNoteStatus: (noteId: number) => void;
}

export const useNotesStore = create<NotesState>()((set) => ({
  notes: [],
  createNote: (note: string) =>
    set((state) => {
      const id = Math.floor(Math.random() * 1000);
      return {
        notes: [...state.notes, { id, title: note, done: false }],
      };
    }),
  toggleNoteStatus: (noteId: number) =>
    set((state) => {
      let notes = state.notes;

      const note = state.notes.find((note) => note.id === noteId);

      if (note) {
        note.done = !note.done;
        state.notes.splice(state.notes.indexOf(note), 1, note);
      }

      return {
        notes,
      };
    }),
}));
