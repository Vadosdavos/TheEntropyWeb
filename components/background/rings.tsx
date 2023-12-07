import Image from "next/image";
import {
  useContext, useEffect, useRef, useState,
} from "react";
import Parallax from "parallax-js";
import EnterContext from "contexts/enter";
import ring from "../../public/images/ring.png";
import lines from "../../public/images/lines.png";
import linesActive from "../../public/images/lines-active.png";
import cosmos from "../../public/images/cosmos.jpg";

const RingsBg = () => {
  const [visible, setVisible] = useState(true);
  const [hover, setHover] = useState(false);
  const { isEnter, setIsEnter } = useContext(EnterContext);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let parallaxInstance: Parallax;

    if (parallaxRef.current) {
      parallaxInstance = new Parallax(parallaxRef.current, {
        // limitY: 0,
      });
    }
    if (isEnter) {
      parallaxInstance.destroy();
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }
    return () => parallaxInstance.destroy();
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
      <div className="absolute w-[50vw] h-[50vw] !pointer-events-auto z-10" ref={parallaxRef}>
        <div className="absolute w-[50vw] h-[50vw]" data-depth="0.1">
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
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          </div>
        </div>

      </div>

      {!isEnter && <button onClick={() => setIsEnter(true)} className="z-10" type="button">Enter</button>}
      <div className={`absolute w-[450px] h-[450px] z-0 scale-1 rounded-full pointer-events-none transition-all duration-[2000ms] ${isEnter ? "scale-[5] opacity-100" : ""} ${hover ? "opacity-100" : "opacity-0"} overflow-hidden`}>
        <Image
          src={cosmos}
          alt="cosmos"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw"
          style={{
            objectFit: "cover",
            transition: "transform 2s",
          }}
        />
      </div>
    </div>
  );
};

export default RingsBg;
