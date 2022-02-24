import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AdviceContainer = styled.section`
  position: relative;
  background-color: var(--dark-grayish-blue);
  max-width: 54rem;
  width: 100%;
  padding: 4.8rem;
  padding-bottom: 7.2rem;
  border-radius: 1.5rem;
`;

export const AdviceContextBox = styled.div`
  width: 100%;
  min-height: 25rem;
`;

export const AdviceHeader = styled(motion.h1)`
  color: var(--neon-green);
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 4.09px;
  text-transform: uppercase;
  margin-bottom: 2.4rem;
`;

export const AdviceQuote = styled(motion.p)`
  font-size: 2.8rem;
  letter-spacing: -0.3px;
  color: #cee3e9;
  text-align: center;
`;

export const AdviceDivider = styled.div`
  height: 1.6rem;
  width: 100%;
  background-image: url(${(props) => props.pattern});
  background-repeat: no-repeat;
  background-position: center;
`;

export const RandomButtom = styled.button`
  position: absolute;
  left: 50%;
  bottom: -3rem;
  border: none;
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 50%;
  background-color: var(--neon-green);
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateX(-50%);
  cursor: pointer;
  transition: box-shadow ease 0.4s, transform ease 0.3s;

  &:hover {
    box-shadow: 0 0 4rem 0 var(--neon-green);
  }

  &:active {
    box-shadow: 0 0 2rem 0 var(--neon-green);
  }
`;

export const Dice = styled.div`
  background-image: url(${(props) => props.dice});
  background-repeat: no-repeat;
  background-position: center;
  height: 2.4rem;
  width: 2.4rem;
  animation: ${(props) => (props.isRolling ? 'Roll ease 1000ms' : 'none')};

  @keyframes Roll {
    0% {
      transform: translateY(-1rem) rotate(0);
    }

    100% {
      transform: translateY(0) rotate(360deg);
    }
  }
`;

export const ErrorMeassage = styled.div`
  position: absolute;
  background-color: #cee3e9;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 1.5rem;
  color: #d8000c;
  left: 50%;
  bottom: -10rem;
  transform: translateX(-50%);
`;
