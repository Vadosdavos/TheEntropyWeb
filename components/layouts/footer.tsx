import EnterContext from "contexts/enter";
import { useContext } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isEnter } = useContext(EnterContext);
  return (
    <footer className={`w-full relative bg-black/[.1] ${isEnter ? "animate-fade-in z-10" : "opacity-0"}`}>
      <div className="text-center text-white p-4">
        ©
        {" "}
        {currentYear}
        {" "}
        Kurwa Studios Ltd.
      </div>
    </footer>
  );
};

export default Footer;
