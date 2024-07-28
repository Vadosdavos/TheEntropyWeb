import cn from "classnames";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useContext } from "react";

import logo from "@/public/images/logo.png";
import EnterContext from "contexts/enter";

import styles from "./header.module.scss";

const inter = Inter({ subsets: ["latin"] });

type HeaderProps = {
  setActivePage: (value: string) => void
};

const Header = ({ setActivePage }: HeaderProps) => {
  const navItems = ["About", "Art", "Contact"];
  const { isEnter } = useContext(EnterContext);

  return (
    <header className={cn(inter.className, styles.header, { entered: isEnter })}>
      <Image src={logo} width={100} height={100} alt="The Entropy Project" />
      <h1 className="invisible">The Entropy Project</h1>
      <nav>
        <ul className={styles.navigation}>
          {navItems.map((el) => <li key={el}><button type="button" onClick={() => setActivePage(el)}>{el}</button></li>)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
