import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const getMatch = () => window.matchMedia(query).matches;
  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handler = (e) => setMatches(e.matches);

    setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', handler);

    return () => mediaQueryList.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

export default useMediaQuery;
