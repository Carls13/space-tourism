import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0 25px 25px;

    hr {
        width: 473px;
        flex-shrink: 0;
        opacity: 0.2515;
        border: 1px solid #FFF;
        position: relative;
        left: 55px;
        z-index: 50;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    gap: 35px;
    align-items: center;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
    padding: 25px 65px;
`;

export const Option = styled.span`
    color: #FFF;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
`;