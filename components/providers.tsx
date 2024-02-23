"use client";

import EnterContext from "@/contexts/enter";
import { useMemo, useState } from "react";

const Providers = ({ children }: {
  children: React.ReactNode
}) => {
  const [isEnter, setIsEnter] = useState(false);

  const contextBody = useMemo(() => ({ isEnter, setIsEnter }), [isEnter]);
  return (
    <EnterContext.Provider value={contextBody}>
      {children}
    </EnterContext.Provider>
  );
};

export default Providers;
