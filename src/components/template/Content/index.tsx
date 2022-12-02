import React, { ReactNode } from 'react';

type ContentProps = {
  children: ReactNode;
};

export const Content = ({ children }: ContentProps) => {
  return <section className="container mx-auto p-8 ">{children}</section>;
};
