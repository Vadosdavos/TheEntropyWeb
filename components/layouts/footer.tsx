const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full relative bg-black/[.1]">
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
