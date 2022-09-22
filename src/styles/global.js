import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
    }
    @font-face {
        font-family: 'Montserrat';
        src: url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,700&display=swap');
    }

    :root{
        --absolut-white: #fff;
        --white:#F7F8FA;
        --blue-300: #40BFFF;
        --blue-400:#3a86ff;
        --dark-blue-700:#104E92;
        --dark-blue-800:#023e8a;
        --black:#000;
        --black-alt:#212529;
        --green:#06d6a0;
        --red:#e71d36;
        --gray-100: #DCE9E2;
        --gray:#626262;
        

        --mobile-pixel:615px;
        --tablet-pixel:920px;

    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    .pointer{
        cursor: pointer;
    }
    .custom-scrollbar{
        &::-webkit-scrollbar {
            width: 8px;
            height: 10px;
            background-color: #5454541a;
            border-radius: 10px;
        } 
        &::-webkit-scrollbar-thumb {
            border: 2px solid rgba(0,0,0,0);
            background-clip: padding-box;
            border-radius: 5px;
            background-color: rgba(84,84,84,0.5);
        }
    }
`

export default GlobalStyle;