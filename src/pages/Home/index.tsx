import React from 'react';

export const HomePage = () => {
  return (
    <section>
      <h1 className="text-3xl text-gray-800 text-center mb-4">
        Welcome to zustand react app!
      </h1>
      <h2 className="text-gray-400 font-medium text-center">
        This is an app to play around with the{' '}
        <a target="_blank" href="https://github.com/pmndrs/zustand">
          Zustand
        </a>{' '}
        state managment lib.
      </h2>
    </section>
  );
};
