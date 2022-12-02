import React from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

type ModuleCardProps = {
  title: string;
  subtitle: string;
  to: string;
};

export const ModuleCard = ({ title, subtitle, to }: ModuleCardProps) => {
  return (
    <Link to={to}>
      <Card>
        <p className="text-2xl text-gray-800 font-semibold">{title}</p>
        <p className="text-gray-400 font-medium">{subtitle}</p>
      </Card>
    </Link>
  );
};
