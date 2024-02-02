import {createGlobalStyle} from "styled-components";
import imageMain from "../assets/images/photo3.jpg"

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    backdrop-filter: brightness(45%);
  }

  body {
    margin: 0;
   font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Josefin Sans', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;

  }

  section {
    padding: 100px 0;
    color: white;
  }
  
  a {
    text-decoration: none;
    //cursor: pointer;
  }
  
  ul {
    list-style: none;
    
  }
  
  li {
    padding: 30px;
    //width: 650px;
  }
`
