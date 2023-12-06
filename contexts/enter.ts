import { createContext } from "react";

const EnterContext = createContext<{ isEnter: boolean, setIsEnter:(state: boolean) => void }>({
  isEnter: false,
  setIsEnter: () => {},
});

export default EnterContext;
