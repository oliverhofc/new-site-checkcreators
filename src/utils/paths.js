const RAW_BASE_URL = import.meta.env.BASE_URL || '/';
export const BASE_URL = RAW_BASE_URL.endsWith('/') ? RAW_BASE_URL : `${RAW_BASE_URL}/`;
const CLEAN_BASE = BASE_URL.replace(/\/$/, '');

const EXTERNAL_PATTERN = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i;

export function isExternalUrl(url = '') {
  return EXTERNAL_PATTERN.test(String(url));
}

export function normalizeRoutePath(path = '/') {
  if (!path) return '/';

  let pathname = String(path);

  try {
    if (/^https?:\/\//i.test(pathname)) {
      pathname = new URL(pathname).pathname;
    }
  } catch {
    // Mantém o valor original se não for uma URL válida.
  }

  const queryIndex = pathname.indexOf('?');
  if (queryIndex >= 0) pathname = pathname.slice(0, queryIndex);

  const hashIndex = pathname.indexOf('#');
  if (hashIndex >= 0) pathname = pathname.slice(0, hashIndex);

  if (CLEAN_BASE && pathname === CLEAN_BASE) return '/';

  if (CLEAN_BASE && pathname.startsWith(`${CLEAN_BASE}/`)) {
    pathname = pathname.slice(CLEAN_BASE.length);
  }

  if (!pathname.startsWith('/')) pathname = `/${pathname}`;
  if (pathname.length > 1) pathname = pathname.replace(/\/$/, '');

  return pathname || '/';
}

export function routeUrl(path = '/') {
  if (!path) return BASE_URL;
  const value = String(path);
  if (isExternalUrl(value)) return value;

  const normalized = normalizeRoutePath(value);
  const cleanPath = normalized.replace(/^\/+/, '');
  return cleanPath ? `${BASE_URL}${cleanPath}` : BASE_URL;
}

export function assetUrl(path = '') {
  if (!path) return path;
  const value = String(path);
  if (isExternalUrl(value) || value.startsWith('data:')) return value;
  return `${BASE_URL}${value.replace(/^\/+/, '')}`;
}
