import { createGlobalStyle  } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #fff;
    --red: #E52e4d;
    --green: #33CC95;
    --blue: #5429CC;
    --blue-light: #6933ff;

    --text-light: #363F5F;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;

  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  // 
  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body{
    background: var(---background);
  }

  body, button, textarea, input{
    font-family: 'Poppins', sans-serif;
    
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
