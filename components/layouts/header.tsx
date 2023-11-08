import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type HeaderProps = {
  setActivePage: (value: string) => void
};

const Header = ({ setActivePage }: HeaderProps) => {
  const navItems = ["About", "Art", "Contact"];

  return (
    <header className={`${inter.className} 
    container flex flex-col gap-2 items-center relative text-center text-white p-10`}
    >
      <Image src="/images/logo.png" width={100} height={100} alt="The Entropy Project" />
      <h1 className="invisible absolute pointer-events-none select-none">The Entropy Project</h1>
      <nav>
        <ul className="flex gap-2">
          {navItems.map((el) => <li key={el}><button type="button" onClick={() => setActivePage(el)}>{el}</button></li>)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
