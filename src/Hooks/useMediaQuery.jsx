import React from 'react';

const useMediaQuery = (query, defaultMatches = window.matchMedia(query)) => {
  const [matches, setMatches] = React.useState(defaultMatches);

  React.useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query, matches]);
  return matches;
};

export default useMediaQuery;
