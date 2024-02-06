import { useThree } from "@react-three/fiber";
import { getRandomNumber } from "utils/numbers/random";
import CanvasStar from "./star";

const Space = () => {
  const { viewport } = useThree();
  const colors = ["#176ab6", "#fb9b39", "#ffffff", "#994646", "#0f7a05"];

  const arr = new Array(500).fill(" ").map(() => colors[getRandomNumber(0, colors.length)]);
  console.log("viewport.width", viewport.width);
  return (
    <>
      {arr.map((el, index) => (
        <CanvasStar
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          canvasHeight={viewport.height}
          canvasWidth={viewport.width}
          color={el}
        />
      ))}
    </>
  );
};

export default Space;
