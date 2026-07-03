import { useState, useEffect, useCallback } from 'react';

/**
 * Roteador minimalista baseado na History API.
 * Sem dependência externa — apenas window.history + popstate.
 *
 * Uso:
 *   const { path, navigate } = useRouter();
 *   ...
 *   <a href="/portfolio" onClick={(e) => { e.preventDefault(); navigate('/portfolio'); }}>
 */
export function useRouter() {
  const [path, setPath] = useState(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to) => {
    if (to === window.location.pathname) return;
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return { path, navigate };
}

/**
 * Hook auxiliar para criar handler em <a> que navega via SPA
 * mas degradar para link normal quando JS desabilitado.
 */
export function useLinkHandler(navigate) {
  return useCallback(
    (to) => (e) => {
      // Permite cmd/ctrl+click abrir em nova aba
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      navigate(to);
    },
    [navigate]
  );
}
