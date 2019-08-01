import React, { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";

export const ToggleHide = () => {
  const [hide, setHide] = useLocalStorage("hide-link");



  useEffect(() => {
    if (hide) {
      document.querySelector("body").classList.add("hide-link");
    } else {
      document.querySelector("body").classList.remove("hide-link");
    }
  }, [hide]);

  return [hide, setHide];
};