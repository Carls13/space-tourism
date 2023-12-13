import styled, { css } from "styled-components";

export const DestinationViewContainer = styled.div`
    background-image: url('/destination-bg.jpg');
    height: auto;
    min-height: 100vh;
`;

export const ViewTitle = styled.h3`
    color: #FFF;
    font-family: Barlow;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 4.725px;
    text-transform: uppercase;
    margin-top: 50px;
    margin-left: 170px;
`;

export const PlanetsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 150px;
    padding: 35px 170px;
`;

export const OpacityNumber = styled.span`
    color: rgba(255, 255, 255, 0.25);
`;

export const PlanetInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    hr {
        width: 473px;
        flex-shrink: 0;
        opacity: 0.2515;
        border: 1px solid #FFF;
        margin-top: 50px;
        margin-bottom: 10px;
    }
`;

export const PlanetSelector = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const PlanetOption = styled.span`
    color: #D0D6F9;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
    cursor: pointer;
    padding-bottom: 10px;

    &:hover {
        border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    }

    ${(props) => props.active ? css`border-bottom: 3px solid white;` : '' }
`;

export const PlanetTitle = styled.h1`
    color: #FFF;
    font-family: Bellefair;
    font-size: 100px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 50px;
    margin-bottom: 14px;
`;

export const PlanetDescription = styled.p`
    color: #D0D6F9;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; 
    margin: 0;
`;

export const PlanetDetailsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

export const DetailColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const DetailLabel = styled.span`
    color: #D0D6F9;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.362px;
    text-transform: uppercase;
`;

export const DetailValue = styled.span`
    color: #FFF;
    font-family: Bellefair;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
`;