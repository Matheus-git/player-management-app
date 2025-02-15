import * as React from "react";

import { Header, PageHeader } from "../ui/Header";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
  goBack?: boolean;
};

export const ContentLayout = ({
  children,
  title,
  goBack,
}: ContentLayoutProps) => {
  return (
    <>
      <Header />
      <PageHeader title={title} goBack={goBack} />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  );
};
