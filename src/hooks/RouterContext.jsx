import { createContext, useContext } from 'react';

export const RouterContext = createContext({
  path: '/',
  navigate: () => {}
});

export function useRoute() {
  return useContext(RouterContext);
}
