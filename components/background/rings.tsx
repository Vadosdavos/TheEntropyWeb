import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import EnterContext from "contexts/enter";
import ring from "../../public/images/ring.png";
import lines from "../../public/images/lines.png";
import linesActive from "../../public/images/lines-active.png";

const RingsBg = () => {
  const [visible, setVisible] = useState(true);
  const { isEnter, setIsEnter } = useContext(EnterContext);
  useEffect(() => {
    if (isEnter) {
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }
  }, [isEnter]);

  return (
    <div className="absolute w-screen h-screen overflow-hidden flex items-center justify-center animate-fade-in">
      {visible && (
        <div className="absolute w-[250vw] h-[250vw] animate-spin-slow">
          <Image
            src={ring}
            alt="ring"
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw"
            style={{
              objectFit: "cover",
              transition: "transform 2s",
              transform: isEnter ? "scale(2)" : "scale(1)",
            }}
          />
          <Image
            src={lines}
            alt="lines"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              transition: "transform 2s",
              transform: isEnter ? "scale(2)" : "scale(1)",
            }}
          />
        </div>
      )}
      <div className="absolute w-[50vw] h-[50vw] animate-spin-reverse">
        <Image
          src={ring}
          alt="ring"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw"
          style={{
            objectFit: "cover",
            transition: "transform 2s",
            transform: isEnter ? "scale(5)" : "scale(1)",
          }}
        />
        <Image
          src={lines}
          alt="lines"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw"
          style={{
            objectFit: "cover",
            transition: "transform 2s",
            transform: isEnter ? "scale(5)" : "scale(1)",
          }}
        />
        <Image
          src={linesActive}
          alt="linesActive"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw"
          style={{
            objectFit: "cover",
            transition: "transform 2s, opacity 0.3s",
            transform: isEnter ? "scale(5)" : "scale(1)",
          }}
          className="opacity-0 hover:opacity-100"
        />
      </div>
      {!isEnter && <button onClick={() => setIsEnter(true)} className="z-10" type="button">Enter</button>}
      <div className={`absolute w-10 h-10 scale-0 rounded-full bg-black opacity-70 transition-all duration-[2000ms] ${isEnter ? "scale-[100]" : ""}`} />
    </div>
  );
};

export default RingsBg;
