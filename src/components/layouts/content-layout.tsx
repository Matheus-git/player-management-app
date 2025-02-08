import * as React from "react";

import { Header, PageHeader } from "../ui/Header";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Header />
      <PageHeader title={title}>{children}</PageHeader>
    </>
  );
};
