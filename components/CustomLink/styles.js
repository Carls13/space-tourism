import styled, { css } from "styled-components";

const activeStyle = css`
    border-bottom: 2px solid white;
`;

export const Option = styled.span`
    color: #FFF;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
    padding: 25px;
    cursor: pointer;

    a {
        color: white;
        text-decoration: none;
    }

    &:hover {
        ${activeStyle}
    }

    &:nth-child(1) {
        padding-left: 120px;
    }
    
    &:nth-child(4) {
        padding-right: 65px;
    }

    ${props => props.active ? activeStyle : null}

    @media screen and (max-width: 600px) {
        background: none;
        backdrop-filter: none;

        &:nth-child(1) {
            padding-left: 25px;
        }
       
        &:nth-child(4) {
            padding-right: 25px;
        }
    }
`;