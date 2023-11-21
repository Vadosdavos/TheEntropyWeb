import Image from "next/image";
import ring from "../../public/images/ring.png";
import lines from "../../public/images/lines.png";
import linesActive from "../../public/images/lines-active.png";

export type RingsBgProps = {
  enter: boolean;
  setEnter: (value: boolean) => void
};

const RingsBg = ({ enter, setEnter }: RingsBgProps) => (
  <div className="absolute w-screen h-screen overflow-hidden flex items-center justify-center">
    <div className={`absolute w-[350vw] h-[350vh] animate-spin-slow transition-all duration-[2000ms] ${enter ? "w-[5000px] h-[5000px]" : ""}`}>
      <Image
        src={ring}
        alt="ring"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <Image
        src={lines}
        alt="lines"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <div className="absolute w-[50vw] h-[50vh] animate-spin-reverse transition-all duration-[2000ms]" style={enter ? { width: 5000, height: 5000 } : {}}>
      <Image
        src={ring}
        alt="ring"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <Image
        src={lines}
        alt="lines"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <Image
        src={linesActive}
        alt="linesActive"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="opacity-0 hover:opacity-100 transition-opacity ease-in duration-300"
      />
    </div>
    {!enter ? <button onClick={() => setEnter(true)} className="z-10" type="button">Enter</button>
      : <button onClick={() => setEnter(false)} className="z-10" type="button">back</button>}
    <div className={`absolute w-0 h-0 rounded-full bg-black opacity-50 transition-all duration-[3000ms] ${enter ? "w-[500%] h-[650%]" : ""}`} />
  </div>
);

export default RingsBg;
