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
        font-family: 'Spoqa Han Sans', 'NotoSans Light', 'Malgun Gothic',
        '맑은 고딕', 'Apple SD Gothic Neo', '돋움', dotum, sans-serif;
        font-weight: 400;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
    }

    @font-face {
        font-family: 'Spoqa Han Sans';
        src: url('../public/fonts/spoqahansansregular-webfont.woff2') format('woff2')
            url('../public/fonts/spoqahansansregular-webfont.woff') format('woff'),
            url('../public/fonts/SpoqaHanSansRegular.ttf') format('truetype');
        font-style: normal;
        font-weight: normal;
    }
    @font-face {
        font-family: 'Spoqa Han Sans Light';
        src: url('../public/fonts/spoqahansanslight-webfont.woff2') format('woff2'),
            url('../public/fonts/spoqahansanslight-webfont.woff') format('woff'),
            url('../public/fonts/SpoqaHanSansLight.ttf') format('truetype');
        font-style: normal;
        font-weight: normal;
    }
    @font-face {
        font-family: 'Spoqa Han Sans Bold';
        src: url('../public/fonts/spoqahansansbold-webfont.woff2') format('woff2'),
            url('../public/fonts/spoqahansansbold-webfont.woff') format('woff'),
            url('../public/fonts/SpoqaHanSansBold.ttf') format('truetype');
        font-style: normal;
        font-weight: normal;
    }


    body {
        font-family: 'Spoqa Han Sans', 'NotoSans Light', 'Malgun Gothic',
        '맑은 고딕', 'Apple SD Gothic Neo', '돋움', dotum, sans-serif;
        font-weight: 400;
        font-size: 14px;
        padding-top: 70px;
        @media (max-width: 768px) {
            padding-top: 60px;
        }
    }
`

export default globalStyles