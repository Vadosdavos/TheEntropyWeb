import Image from "next/image";
import Parallax from "parallax-js";
import {
  useContext, useEffect, useRef, useState,
} from "react";

import EnterContext from "contexts/enter";
import cosmos from "public/images/cosmos.jpg";
import linesActive from "public/images/lines-active.png";
import lines from "public/images/lines.png";
import ring from "public/images/ring.png";

import styles from "./rings.module.scss";

const RingsBg = () => {
  const [visible, setVisible] = useState(true);
  const [hover, setHover] = useState(false);
  const { isEnter, setIsEnter } = useContext(EnterContext);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let parallaxInstance: Parallax | undefined;

    if (parallaxRef.current) {
      parallaxInstance = new Parallax(parallaxRef.current);
    }
    if (isEnter && parallaxInstance !== undefined) {
      parallaxInstance.destroy();
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }
    return () => (parallaxInstance !== undefined ? parallaxInstance.destroy() : undefined);
  }, [isEnter]);

  const handleEnter = () => {
    if (isEnter) {
      return;
    }
    setIsEnter(true);
  };

  return (
    <div className={styles.wrapper}>
      {visible && (
        <div className={styles.ring}>
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
      <div className={styles.ring2Wrapper} ref={parallaxRef} onClick={handleEnter}>
        <div className={styles.ring2Parallax} data-depth="0.1">
          <div className={styles.ring2Animate}>
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
              className={styles.ring2LinesActive}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          </div>
        </div>

      </div>

      <div className={`absolute w-[30vw] h-[30vw] z-0 scale-1 rounded-full pointer-events-none transition-all duration-[2000ms] ${isEnter ? "scale-[5] opacity-100" : ""} ${hover ? "opacity-100" : "opacity-0"} overflow-hidden`}>
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
          onClick={handleEnter}
        />
      </div>
    </div>
  );
};

export default RingsBg;
