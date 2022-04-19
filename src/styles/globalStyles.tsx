import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #ffffff;
    color: #282828;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  ul,
  p {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
  }

  .container {
    width: 85%;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
