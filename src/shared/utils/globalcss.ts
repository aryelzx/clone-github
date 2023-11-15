import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Arial', sans-serif;
}

button {
  cursor: pointer;
  border: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyle