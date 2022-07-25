import Counter from "./Counter";
import OneItem from "./OneItem";

export const getStorageValue = (key: string, defaultValue: Counter|OneItem[]) => {
  // getting stored value
  const saved: string | null = localStorage.getItem(key);
  const initial = typeof saved === "string" ? JSON.parse(saved) : undefined;
  return initial || defaultValue;
};

export const setStorageValue = (key: string, value: Counter|OneItem[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};
