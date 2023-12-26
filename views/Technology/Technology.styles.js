import styled from "styled-components";
import css from "styled-jsx/css";

const activeStyles = css`
    background: white;
    border-radius: 50%;
    color: #0B0D17;
`;

export const TechnologyViewContainer = styled.div`
    background-image: url('/technology-bg.jpg');
    height: auto;
    min-height: 100vh;
`;

export const TechnologyContentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 80px;
    padding: 35px 170px;
    padding-right: 0px;

    .technology-image {
        @media screen and (max-width: 600px) {
            width: 100%;
        } 
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
        padding: 25px;
        text-align: center;
    }
    
    @media screen and (max-width: 600px) {
        padding: 25px 0;
    }
`;

export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media screen and (max-width: 1000px) {
        flex-direction: row;
    }
`;

export const OptionContainer = styled.div`
    cursor: pointer;
    background-image: url('/oval.png');
    background-repeat: no-repeat;
    background-size: 80px 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    text-align: center;
    font-family: Bellefair;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2px;
    color: white;

    &:hover {
        ${activeStyles};
    }

    ${(props) => props.active ? activeStyles : ''};
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 470px;

    h1, h3, p { 
        margin: 0;
    }

    @media screen and (max-width: 600px) {
       width: 100%;
    } 
`;

export const FirstLine = styled.h3`
    color: #D0D6F9;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;

    @media screen and (max-width: 600px) {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 2.362px;
    } 
`;

export const MainLine = styled.h1`
    color: #FFF;
    font-family: Bellefair;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media screen and (max-width: 600px) {
        color: #FFF;
        text-align: center;
        font-family: Bellefair;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
    } 
`;

export const Description = styled.p`
    color: #D0D6F9;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;

    @media screen and (max-width: 600px) {
        color: #D0D6F9;
        text-align: center;
        font-family: Barlow;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
        width: 80%;
        margin: 5px 10%!important;
    } 
`;