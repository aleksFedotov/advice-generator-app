import React, { useState, useEffect, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';

import AdviceContext from '../context/adviceContext';

import patternDesk from '../images/pattern-divider-desktop.svg';
import patternMobile from '../images/pattern-divider-mobile.svg';
import diceImg from '../images/icon-dice.svg';
import {
  AdviceContainer,
  AdviceContextBox,
  AdviceHeader,
  AdviceQuote,
  AdviceDivider,
  RandomButtom,
  Dice,
  ErrorMeassage,
} from './AdviceStyle';

const Advice = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isRolling, setIsRolling] = useState(false);

  const adviceCtx = useContext(AdviceContext);

  const { currentAdvice, getNewAdvice, error } = adviceCtx;

  const changeWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth);

    return () => {
      window.removeEventListener('resize', changeWindowWidth);
    };
  }, []);

  const buttonClick = () => {
    getNewAdvice();
    setIsRolling(true);

    setTimeout(() => {
      setIsRolling(false);
    }, 1000);
  };

  const HeaderVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5 },
    },
    exit: {
      opacity: 0,
      x: 50,

      transition: { duration: 1 },
    },
  };

  const TextVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5 },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 1 },
    },
  };

  return (
    <AdviceContainer>
      <AnimatePresence exitBeforeEnter initial={false}>
        <AdviceContextBox key={currentAdvice.id}>
          <AdviceHeader
            variants={HeaderVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            advice #{currentAdvice.id}
          </AdviceHeader>

          <AdviceQuote
            variants={TextVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            “{currentAdvice.advice}”
          </AdviceQuote>
        </AdviceContextBox>
      </AnimatePresence>
      <AdviceDivider pattern={width > 600 ? patternDesk : patternMobile} />
      <RandomButtom onClick={buttonClick}>
        <Dice dice={diceImg} isRolling={isRolling} />
      </RandomButtom>
      {error && <ErrorMeassage>Sorry, something went wrong</ErrorMeassage>}
    </AdviceContainer>
  );
};

export default Advice;
