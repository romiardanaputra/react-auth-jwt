import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { IStaticMethods } from "preline/preline";
import "preline/preline";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const Preline = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return <></>;
};

export default Preline;
