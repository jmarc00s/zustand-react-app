import App from 'App';
import { HomePage } from 'pages/Home/index';
import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const NotesPage = React.lazy(() => import('pages/Notes'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'notes',
        element: (
          <Suspense fallback={<>Loading...</>}>
            <NotesPage />
          </Suspense>
        ),
      },
    ],
  },
]);
