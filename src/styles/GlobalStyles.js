import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {

/* Primary */

--ligth-cyan:hsl(193, 38%, 86%);
--neon-green:hsl(150, 100%, 66%);

/* Neutral */

--grayish-blue: hsl(217, 19%, 38%);
--dark-grayish-blue: hsl(217, 19%, 24%);
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  font-size: 62.5%;
}

body {
  font-size: 2.8rem;
  font-family: 'Manrope', sans-serif;
  min-height:100vh;


  background: #202733;
  color: #fff;
  
}


#root{
  position: relative;
  min-height: inherit;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
}


`;

export default GlobalStyles;
