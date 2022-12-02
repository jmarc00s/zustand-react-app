import React from 'react';
import { Note as NoteModel } from 'pages/Notes/models';
import { Card, Badge } from 'flowbite-react';
import { useNotesStore } from 'pages/Notes/store';

type NoteProps = {
  id: NoteModel['id'];
  title: NoteModel['title'];
  done: NoteModel['done'];
};

type BadgeColors = 'success' | 'failure';

export const Note = ({ id, title, done }: NoteProps) => {
  const { toggleNoteStatus } = useNotesStore();
  const badgeColor: BadgeColors = done ? 'success' : 'failure';
  const badgeText = done ? 'Done' : 'Not done';

  const handleNoteClick = () => toggleNoteStatus(id);

  return (
    <Card
      className="flex flex-col hover:cursor-pointer"
      onClick={handleNoteClick}
    >
      <p className="text-lg text-gray-800 font-medium">{title}</p>
      <i className="text-gray-400 text-xs">#{id}</i>
      <div className="flex items-center justify-center ">
        <Badge color={badgeColor}>{badgeText}</Badge>
      </div>
    </Card>
  );
};
