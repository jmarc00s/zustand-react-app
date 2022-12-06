import React from 'react';
import { ModuleCard } from './components/ModuleCard';

export const HomePage = () => {
  const modules = [
    {
      title: 'Notes',
      subtitle: 'Simple usage of zustand',
      to: '/notes',
    },
    {
      title: 'Users',
      subtitle: 'Async actions and slices',
      to: '/users',
    },
  ];

  return (
    <section>
      <h1 className="text-3xl text-gray-800 text-center mb-4">
        Welcome to zustand react app!
      </h1>
      <h2 className="text-gray-400 font-medium text-center">
        This is an app to play around with the{' '}
        <a
          className="underline"
          target="_blank"
          href="https://github.com/pmndrs/zustand"
        >
          Zustand
        </a>{' '}
        state managment lib.
      </h2>

      <div className="grid grid-cols-4 gap-2 w-2/3 mx-auto mt-8">
        {modules.map((module, index) => (
          <ModuleCard {...module} key={index} />
        ))}
      </div>
    </section>
  );
};
