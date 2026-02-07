import { useEffect, useState } from 'react';

/**
 * Hook that provides reactive access to the current URL search parameters.
 * Updates when the browser location changes via navigation or history events.
 */
export function useLocationSearch(): URLSearchParams {
  const [search, setSearch] = useState(() => new URLSearchParams(window.location.search));

  useEffect(() => {
    const updateSearch = () => {
      setSearch(new URLSearchParams(window.location.search));
    };

    // Listen to popstate (back/forward navigation)
    window.addEventListener('popstate', updateSearch);
    
    // Listen to pushState/replaceState via custom event
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      updateSearch();
    };

    window.history.replaceState = function(...args) {
      originalReplaceState.apply(window.history, args);
      updateSearch();
    };

    return () => {
      window.removeEventListener('popstate', updateSearch);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  return search;
}
