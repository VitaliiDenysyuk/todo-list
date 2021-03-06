import { useState, useEffect } from "react";

const getStorageValue = (key: string, defaultValue: any) => {
  // getting stored value
  const saved: string | null = localStorage.getItem(key);
  const initial = typeof saved === "string" ? JSON.parse(saved) : undefined;
  return initial || defaultValue;
};

const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
