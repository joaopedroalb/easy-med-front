import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
    }
    :root{
        --white:#fff;
        --blue:#3a86ff;
        --dark-blue:#023e8a;
        --black:#000;
        --green:#06d6a0;
        --red:#e71d36;
        --gray:#626262;

        --mobile-pixel:615px;
        --tablet-pixel:920px;

    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
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