"use client";

import cn from "classnames";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";
import { useContext, useState } from "react";

import Footer from "components/layouts/footer";
import Header from "components/layouts/header";
import Loader from "components/layouts/loader";
import About from "components/pages/about";
import Art from "components/pages/art";
import Contact from "components/pages/contact";
import EnterContext from "contexts/enter";

import styles from "./home.module.scss";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Background = dynamic(() => import("components/background"), {
  ssr: false,
  loading: () => <Loader />,
});

const Home: NextPage = () => {
  const [activePage, setActivePage] = useState("About");
  const { isEnter } = useContext(EnterContext);

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
      {isEnter && (
        <>
          <Header setActivePage={setActivePage} />
          <main className={cn(styles.main, roboto.className, "centered", { isEnter: styles.entered })}>
            <aside className="">pers stoit</aside>
            {renderPage(activePage)}
          </main>
          <Footer />
        </>
      )}
    </>
  );
};
export default Home;
