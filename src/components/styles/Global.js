import { createGlobalStyle } from 'styled-components';
import { up, down } from 'styled-breakpoints';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    :root {
    --pink: hsl(322, 100%, 66%);
    --pale-cyan: hsl(193, 100%, 96%);
    --dark-cyan: hsl(192, 100%, 9%);
    --grayish-blue: hsl(208, 11%, 55%);
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;

        ${up('md')} {
            font-size: 18px;
        }
    }

    img {
        max-width: 100%;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`;
