import { useState, useEffect, useCallback } from 'react';
import { normalizeRoutePath, routeUrl } from '../utils/paths.js';

/**
 * Roteador minimalista baseado na History API.
 * Preparado para GitHub Pages em subpasta, usando import.meta.env.BASE_URL.
 */
export function useRouter() {
  const [path, setPath] = useState(() =>
    typeof window !== 'undefined' ? normalizeRoutePath(window.location.pathname) : '/'
  );

  useEffect(() => {
    const onPop = () => setPath(normalizeRoutePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to) => {
    const nextPath = normalizeRoutePath(to);
    const nextUrl = routeUrl(nextPath);
    const currentPath = normalizeRoutePath(window.location.pathname);

    if (nextPath !== currentPath || window.location.pathname !== new URL(nextUrl, window.location.origin).pathname) {
      window.history.pushState({}, '', nextUrl);
    }

    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return { path, navigate };
}

/**
 * Hook auxiliar para criar handler em <a> que navega via SPA
 * mas degrada para link normal quando JS estiver desabilitado.
 */
export function useLinkHandler(navigate) {
  return useCallback(
    (to) => (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      navigate(to);
    },
    [navigate]
  );
}
