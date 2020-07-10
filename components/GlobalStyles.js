import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset'

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
    }

    body {
        /* font-family: "Spoqa-Han-Sans"; */
        font-weight: 400;
        font-size: 14px;
        padding-top: 70px;
        @media (max-width: 768px) {
            padding-top: 60px;
        }
    }

    /* @font-face {
        font-family: "Spoqa-Han-Sans";
        font-weight: 200;
        src: url("../assets/fonts/SpoqaHanSans-Thin.woff2") format("woff2"),
            url("../assets/fonts/SpoqaHanSans-Thin.woff") format("woff"),
            url("../assets/fonts/SpoqaHanSans-Thin.ttf") format("ttf");
    }

    @font-face {
        font-family: "Spoqa-Han-Sans";
        font-style: normal;
        font-weight: 400;
        src: url("../assets/fonts/SpoqaHanSans-Regular.woff2") format("woff2"),
            url("../assets/fonts/SpoqaHanSans-Regular.woff") format("woff"),
            url("../assets/fonts/SpoqaHanSans-Regular.otf") format("otf");
    }

    @font-face {
        font-family: "Spoqa-Han-Sans";
        font-weight: 600;
        src: url("../assets/fonts/SpoqaHanSans-Bold.woff2") format("woff2"),
            url("../assets/fonts/SpoqaHanSans-Bold.woff") format("woff"),
            url("../assets/fonts/SpoqaHanSans-Bold.otf") format("otf");
    } */
`

export default globalStyles