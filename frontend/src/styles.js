import 'rsuite/dist/styles/rsuite-default.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        @import url('https://fonts.googleapis.com/css?family=Dosis|Open+Sans&display=swap');
        font-family: 'Open Sans', sans-serif;
    }

    p {
        margin-bottom: 1rem !important;
    }

    .text-center {
        text-align: center;
    }

    .text-right {
        text-align: right;
    }

    .rs-btn {
        font-family: 'Open Sans', sans-serif;
        font-weigth: 600;
    }

    .rs-nav-item-text {
        color: #fff;
        padding-top: 0;
        padding-bottom: 0;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.87em;
        word-spacing: 2px;
    }
    .rs-nav-item-content {
        opacity: 0.8;
        &:hover, &:focus {
            opacity: 1;
            background: transparent !important;
        }
        .rs-icon {
            color: #FFF;
        }
    }

    .how-it-works {
        .rs-timeline-item-tail {
            left: 22.5px;
        }

        .rs-timeline-item-content {
            margin-left: 3rem;
        }

        .rs-timeline-item-custom-dot {
            text-align: center;
            height: 50px;
            width: 50px;
            background: #eaeff4;
            border-radius: 10rem;

            .rs-icon {
                color: #4CAF50;
                font-size: 25px;
                margin-top: 13px;
                margin-left: 2px;
            }
        }
    }
    
`;

export default GlobalStyle;