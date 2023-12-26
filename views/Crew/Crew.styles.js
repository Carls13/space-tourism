import styled from "styled-components";

export const CrewViewContainer = styled.div`
    background-image: url('/crew-bg.jpg');
    height: auto;
    min-height: 100vh;
`;

export const CrewInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 35px 85px;
    padding-left: 170px;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        padding: 25px;
        text-align: center;
    }

     .crew-image {
        @media screen and (max-width: 600px) {
           width: 90%;
        } 
    }
`;

export const Role = styled.h3`
    color: #FFF;
    opacity: 0.5042;
    font-family: Bellefair;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin: 0;
`;

export const Name = styled.h2`
    color: #FFF;
    font-family: Bellefair;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin: 0;
`;

export const CrewDescription = styled.p`
    color: #D0D6F9;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin: 0;
`;

export const CrewDetailsColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const DotsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;

    div {
        margin: 0 5px;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
        justify-content: center;
    }
`;

export const Dot = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.active ? 'white' : '#ffffff33'};

    &:hover {
        background-color: white;
    }
`;