import { ReactNode } from "react";
import { Title } from "./Title";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div
      className={`flex md:w-2/3 md:mb-9 flex-col rounded-md bg-white text-gray-800 w-5/6 overflow-scroll`}
    >
      <Title title={title} />
      <div className={`p-4`}>{children}</div>
    </div>
  );
}
