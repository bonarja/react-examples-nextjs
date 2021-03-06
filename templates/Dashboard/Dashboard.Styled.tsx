import styled from "styled-components";
import { Assets } from "../../assets/assets";

const background = `
    background-image: url(${Assets.WallpaperBlur});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
`;

export const DashboardStyles = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    padding: 40px;
    ${background}
    /* background-image: linear-gradient(
        -200deg,
        #eef1f6 20%,
        #fce5d7 40%,
        #f4b6cc 100%,
        #f2cbf1 32%
    ); */
    .window {
        width: 100%;
        height: 100%;
        ${background}
        overflow: hidden;
        border-radius: 4px;
        position: relative;
        &:before {
            content: "";
            box-shadow: inset 0 0 0 3000px rgb(255 255 255 / 50%);
            filter: blur(10px);
            width: calc(100% + 50px);
            height: calc(100% + 50px);
            position: absolute;
            left: -25px;
            top: -25px;
        }
        .wrapContent {
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            display: grid;
            grid-template-rows: ${({ headerSize }) => headerSize}px auto;
            .header {
                background-color: white;
                display: flex;
                align-items: center;
                padding: 0 20px;
                color: #6f6f6f;
                font-weight: bold;
                letter-spacing: 0.015em;
                font-size: 0.8em;
            }
            .content {
                padding: 25px;
            }
        }
    }
`;
