import styled from "styled-components";

export const HomeViewContainer = styled.div`
    background-image: url('/home-bg.jpg');
    height: auto;
    min-height: 100vh;

    h1, h3, p { 
        margin: 0;
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    gap: 200px;
    padding: 85px;
    padding-left: 170px;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FirstLine = styled.h3`
    color: #D0D6F9;
    font-family: Barlow;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 4.725px;
`;

export const MainLine = styled.h1`
    color: #FFF;
    font-family: Bellefair;
    font-size: 150px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Description = styled.p`
    color: #D0D6F9;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40%;
`;

export const Button = styled.button`
    width: 274px;
    height: 274px;
    flex-shrink: 0;
    border: none;
    border-radius: 274px;
    background: #FFF;
    color: #0B0D17;
    font-family: Bellefair;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2px;
    text-align: center;
    cursor: pointer;
`;