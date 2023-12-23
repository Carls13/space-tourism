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

    a {
        color: white;
        text-decoration: none;
    }

    &:hover {
        ${activeStyle}
    }
    ${props => props.active ? activeStyle : null}
`;