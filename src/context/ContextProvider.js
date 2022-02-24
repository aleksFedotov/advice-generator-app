import { useState } from 'react';
import AdviceContext from './adviceContext';

const firstAdvise = {
  id: 117,
  advice:
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
};

const ContextProvider = ({ children }) => {
  const [advice, setAdvice] = useState({ ...firstAdvise });

  const [error, setError] = useState(null);

  const getNewAdvice = async () => {
    setError(null);

    try {
      const res = await fetch('https://api.adviceslip.com/advice');

      if (!res.ok) throw new Error('Something went wrong');

      const resData = await res.json();
      const adviceId = resData.slip.id;
      const advice = resData.slip.advice;

      setAdvice({ id: adviceId, advice: advice });
    } catch (error) {
      setError('Sorry, something went wrong');
    }
  };

  const initialState = {
    currentAdvice: advice,
    getNewAdvice,
    error,
  };
  return (
    <AdviceContext.Provider value={initialState}>
      {children}
    </AdviceContext.Provider>
  );
};

export default ContextProvider;
