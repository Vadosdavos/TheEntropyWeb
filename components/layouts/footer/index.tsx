import cn from "classnames";
import { useContext } from "react";

import EnterContext from "contexts/enter";

import styles from "./footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isEnter } = useContext(EnterContext);
  return (
    <footer className={cn(styles.footer, { entered: isEnter })}>
      <p className={styles.copyright}>
        ©
        {" "}
        {currentYear}
        {" "}
        Kurwa Studios Ltd.
      </p>
    </footer>
  );
};

export default Footer;
