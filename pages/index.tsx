import type { NextPage } from "next";
import { Roboto } from "next/font/google";
import Header from "components/layouts/header";
import dynamic from "next/dynamic";
import Footer from "components/layouts/footer";
import About from "components/pages/about";
import { useState } from "react";
import Art from "components/pages/art";
import Contact from "components/pages/contact";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Background = dynamic(() => import("components/background/background"), {
  ssr: false,
});

export const getStaticProps = async () => ({
  props: {
    message: "Hello",
  },
});

type HomePageProps = {
  message: string;
};

const Home: NextPage<HomePageProps> = ({ message }) => {
  const [activePage, setActivePage] = useState("About");
  const renderPage = (page: string) => {
    switch (page) {
      case "About":
        return <About />;
      case "Art":
        return <Art />;
      case "Contact":
        return <Contact />;

      default:
        return <About />;
    }
  };
  return (
    <>
      <Background />
      <Header setActivePage={setActivePage} />
      <main
        className={`relative ${roboto.className} mb-auto container grid grid-cols-2`}
      >
        <aside className="">pers stoit</aside>
        {renderPage(activePage)}

      </main>
      <Footer />
    </>
  );
};
export default Home;
