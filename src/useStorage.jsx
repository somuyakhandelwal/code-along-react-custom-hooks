import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  const getValue = () => {
    const save = JSON.parse(localStorage.getItem(key)) || JSON.parse(sessionStorage.getItem(key));
    return save || initialValue;
  };
  const [content, setContent] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(content));
    sessionStorage.setItem(key, JSON.stringify(content));
  }, [key, content]);
  return [content, setContent];
}

export default useLocalStorage;