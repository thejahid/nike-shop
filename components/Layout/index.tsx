import { FC } from "react";

import { Nav } from "./Nav";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
