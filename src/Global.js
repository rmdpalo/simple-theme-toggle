import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
}

body {
    align-items: center;
    background: ${({theme}) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
}

button {
    background: ${({theme}) => theme.buttonBackground};
    color: ${({theme}) => theme.button};
    border-radius: 25px;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({theme}) => theme.buttonBorder};
    border-radius: 25px;
}
`;