import React from 'react';
import { Outlet, RouterProvider } from 'react-router-dom';
import { router } from 'config/routes';
import { Navbar } from 'components/template/Navbar';
import { Content } from 'components/template/Content';

export const MainLayout = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </main>
  );
};
