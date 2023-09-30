import type { NextPage } from "next";
import { Inter } from "next/font/google";
import Header from "components/layouts/header";

const inter = Inter({ subsets: ["latin"] });

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
    <Header />
    <main
      className={`mx-[10px] lg:mx-auto relative flex lg:w-[528px] flex-col 
        items-center justify-between pt-3 pb-5 px-[19px] desktop:py-[50px] lg:px-0 bg-main-bg 
        lg:bg-none rounded-[12px] lg:rounded-none ${inter.className}`}
    >
      {message}
    </main>
  </>
);
export default Home;
