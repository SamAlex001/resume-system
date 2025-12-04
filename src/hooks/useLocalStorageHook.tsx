import { useEffect, useState } from "react"

function useLocalStorageHook<T>(key: string, initialValue: T) {
  const [reviewValue, setReviewValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error('Error retrieving value: ', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(reviewValue));
    } catch (error) {
      console.error('Error storing in localStorage: ', error);
    }
  }, [key, reviewValue]);

  return [reviewValue, setReviewValue] as const;
}

export default useLocalStorageHook