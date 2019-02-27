import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    height: 100vh;
    margin: 0 auto;
    max-width: 400px;
  }
`
