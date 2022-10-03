import { useState } from "react";
function useLocalStorage(
  key: string,
  defaultValue?: any
): [value: any, setValue: (key: any) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === typeof undefined) {
      return defaultValue;
    }

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(JSON.stringify(item)) : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      const valueToStore: string =
        typeof value === "string" ? value : JSON.stringify(value);
      localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
