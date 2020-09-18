import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';

const CenteredDiv = styled.div`
display: flex;
justify-content: center;
`;

const StickyFooter = styled.footer`
position: absolute;
bottom: 0;
width: 100%;
height: 2.5rem;
`;

// const StyledButton = styled.button`
// font-size: 4em;
// `;

function App() {
  // sets theme to state
  const [theme, setTheme] = useState('light');
  
  // toggles between themes
  const toggleTheme = () => {
    // If the theme is light, switch to dark
    if (theme === 'light') {
      setTheme('dark');
      // else switch to light
    } else {
      setTheme('light');
    }
  }

  return (
    // ternary that allows us to toggle between the two themes we've set
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <h1>It's a {theme} theme! Click the button to switch!</h1>
        <CenteredDiv>
          {/* Question for people: why is this just a regular button call but its styled? */}
          <button onClick={toggleTheme}>Click me!</button>
        </CenteredDiv>
        <StickyFooter>
          <p>Tinkered with by Miguel P</p>
        </StickyFooter>
      </>
    </ThemeProvider>
  );
}

export default App;