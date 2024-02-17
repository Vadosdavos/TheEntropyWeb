import { Canvas } from "@react-three/fiber";
import { useContext, useEffect, useState } from "react";
import EnterContext from "@/contexts/enter";
import StarField from "./stars";

import RingsBg from "./rings";

const Background = () => {
  const [isCanvas, setIsCanvas] = useState(true);
  const { isEnter } = useContext(EnterContext);
  useEffect(() => {
    if (isEnter) {
      setTimeout(() => setIsCanvas(false), 1000);
    }
  }, [isEnter]);

  return (
    <>
      {isCanvas && (
        <Canvas
          camera={{ position: [0, 0, 100] }}
          className="animate-fade-in"
          style={{ position: "absolute" }}
        >
          <StarField />
        </Canvas>
      )}
      <RingsBg />
    </>
  );
};

export default Background;
