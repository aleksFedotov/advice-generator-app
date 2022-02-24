import { createContext } from 'react';

const AdviceContext = createContext({
  currentAdvice: {},
  getNewAdvice: () => {},

  error: null,
});

export default AdviceContext;
