import type { NextPage } from "next";

import { SEO } from "components";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Nike" />
      <main>Hello I'm Main.</main>
      <footer>I'm Footer</footer>
    </>
  );
};

export default Home;
