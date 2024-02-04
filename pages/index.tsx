import type { NextPage } from "next";
import { Roboto } from "next/font/google";
import Header from "components/layouts/header";
import dynamic from "next/dynamic";
import Footer from "components/layouts/footer";
import About from "components/pages/about";
import { useContext, useState } from "react";
import Art from "components/pages/art";
import Contact from "components/pages/contact";
import EnterContext from "contexts/enter";
import Loader from "components/layouts/loader";
import BackgroundCanvas from "components/canvas";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Background = dynamic(() => import("components/background/background"), {
  ssr: false,
  loading: () => <Loader />,
});

export const getStaticProps = async () => ({
  props: {
    message: "Hello",
  },
});

type HomePageProps = {
  message: string;
};

const Home: NextPage<HomePageProps> = () => {
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
      <BackgroundCanvas />
      {/* <Background /> */}
      {isEnter && (
        <>
          <Header setActivePage={setActivePage} />
          <main
            className={`overflow-hidden relative ${roboto.className} mb-auto container grid grid-cols-2 ${isEnter ? "animate-fade-in z-10" : "opacity-0"}`}
          >
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
