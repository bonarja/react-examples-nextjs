import styled from "styled-components";

export const ExampleListViewStyles = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    display: grid;
    grid-template-rows: min-content auto;
    .title {
        padding: 12px 20px;
        margin: 0;
    }
    .itemsList {
        padding: 20px;
        overflow-y: auto;
        .item {
            width: 180px;
            height: 250px;
            background: white;
            padding: 10px;
            border-radius: 7px;
            user-select: none;
            cursor: pointer;
            box-shadow: 0px 28px 40px -25px #bdb1c5;
            animation-duration: 500ms;
            .material-icons {
                color: white;
            }
            .background {
                border-radius: 7px;
                overflow: hidden;
                height: 100px;
                user-select: none;
                .solid {
                    display: grid;
                    place-items: center;
                    span {
                        font-size: 3em;
                    }
                }
            }
            .text {
                padding-top: 15px;
                p {
                    margin: 0;
                    font-size: 0.8em;
                    font-weight: bold;
                    color: #727272;
                    line-height: 1.4;
                }
            }
        }
    }
`;
