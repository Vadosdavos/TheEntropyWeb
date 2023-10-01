import type { NextPage } from "next";
import { Inter } from "next/font/google";
import Header from "components/layouts/header";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

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

const Home: NextPage<HomePageProps> = ({ message }) => (
  <>
    <Background />
    <Header />
    <main
      className={`relative ${inter.className}`}
    >
      {message}
    </main>
  </>
);
export default Home;
