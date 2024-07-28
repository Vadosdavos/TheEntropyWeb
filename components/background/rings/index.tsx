import cn from "classnames";
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
    setHover(false);
  };

  const handleHover = () => {
    if (isEnter) {
      return;
    }
    setHover((prev) => !prev);
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
      <div
        className={styles.ring2Wrapper}
        ref={parallaxRef}
        onClick={handleEnter}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
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
              className={cn(styles.ring2LinesActive, { [styles.ring2LinesActiveHover]: hover })}
            />
          </div>
        </div>

      </div>

      <div className={cn(styles.cosmos, {
        [styles.cosmosEntered]: isEnter,
        [styles.cosmosHover]: hover,
      })}
      >
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
