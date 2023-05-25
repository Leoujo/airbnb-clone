// By default, everything inside the app folder is a server-side component.
"use client";

// ReactNode specify that a prop can hold any type of content that can be rendered by React.
interface ContainersProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainersProps> = ({ children }) => {
  return <div className="max-w-[2520px] mx-auto xl:px-20 md: px-10 sm:px-2 xs:px-4">{children}</div>;
};

export default Container;
