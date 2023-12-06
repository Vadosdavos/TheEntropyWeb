import "styles/globals.css";
import type { AppProps } from "next/app";
import EnterContext from "contexts/enter";
import { useMemo, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isEnter, setIsEnter] = useState(false);

  const contextBody = useMemo(() => ({ isEnter, setIsEnter }), [isEnter]);
  return (
    <EnterContext.Provider value={contextBody}>
      <Component {...pageProps} />
    </EnterContext.Provider>
  );
}
