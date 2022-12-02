import React from 'react';
import { Navbar as FlowNavbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
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
        <Link to={'/'}>
          <FlowNavbar.Link>Home</FlowNavbar.Link>
        </Link>
        <Link to={'/notes'}>
          <FlowNavbar.Link>Notes</FlowNavbar.Link>
        </Link>
      </FlowNavbar.Collapse>
    </FlowNavbar>
  );
};
