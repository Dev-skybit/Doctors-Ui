import { createGlobalStyle } from 'styled-components'

import { colors } from './variables'

const GlobalStyles = createGlobalStyle`
  // font
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

  *{
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    color: inherit;

    margin: 0;
    padding: 0;

    box-sizing: border-box;
    user-select: none;

    ::-webkit-scrollbar{ width: 0px }
  }

  body,
  input, 
  button,
  select, 
  textarea{ font: 400 1rem 'Roboto Condensed', sans-serif; color: #000; }

  html, body, #root { font-size: 10px; height: 100%; background: ${colors.white} }
`

export default GlobalStyles