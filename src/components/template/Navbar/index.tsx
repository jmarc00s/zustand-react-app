import React from 'react';
import { Navbar as FlowNavbar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <FlowNavbar className="border-b-2" fluid={true} rounded={true}>
      <FlowNavbar.Brand href="/">
        <img
          src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560"
          className="h-16"
          alt="zustand logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800">
          Zustand react app
        </span>
      </FlowNavbar.Brand>
      <FlowNavbar.Toggle />
      <FlowNavbar.Collapse>
        <FlowNavbar.Link
          className="hover:cursor-pointer"
          onClick={() => navigate('/')}
        >
          Home
        </FlowNavbar.Link>

        <FlowNavbar.Link
          className="hover:cursor-pointer"
          onClick={() => navigate('/notes')}
        >
          Notes
        </FlowNavbar.Link>

        <FlowNavbar.Link
          className="hover:cursor-pointer"
          onClick={() => navigate('/users')}
        >
          Users
        </FlowNavbar.Link>
      </FlowNavbar.Collapse>
    </FlowNavbar>
  );
};
