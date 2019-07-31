import React, { useState } from "react";

export const useLocalStorage = (key, initalValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(token);

    return item ? JSON.parse(item) : initalValue;
  });

  const setValue = value => {
    setStoredValue(value);
    localStorage.setItem(token, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
