import Image from "next/image";
import {
  DestinationViewContainer,
  ViewTitle,
  PlanetsContainer,
  PlanetInfoContainer,
  PlanetSelector,
  PlanetOption,
  PlanetTitle,
  PlanetDescription,
  PlanetDetailsContainer,
  DetailColumn,
  DetailLabel,
  DetailValue,
  OpacityNumber,
} from "./Destination.styles";
import { Header } from "@/components/Header/Header";
import { DESTINATION_DATA } from "./destinationData";
import { useState } from "react";

export const DestinationView = () => {
    const [destination, setDestination] = useState("MOON");

    const destinationData = DESTINATION_DATA.find((item) => item.planetTitle === destination);

    const { planetTitle, planetImage, planetDescription, planetDistance, travelTime } = destinationData;

  return (
    <DestinationViewContainer>
      <Header />
      <ViewTitle><OpacityNumber>01</OpacityNumber> Pick your destination</ViewTitle>
      <PlanetsContainer>
        <Image src={planetImage} width={445} height={445} alt="Planet" />
        <PlanetInfoContainer>
          <PlanetSelector>
            <PlanetOption active={destination === "MOON"} onClick={() => setDestination("MOON")}>MOON</PlanetOption>
            <PlanetOption active={destination === "MARS"} onClick={() => setDestination("MARS")}>MARS</PlanetOption>
            <PlanetOption active={destination === "EUROPA"} onClick={() => setDestination("EUROPA")}>EUROPA</PlanetOption>
            <PlanetOption active={destination === "TITAN"} onClick={() => setDestination("TITAN")}>TITAN</PlanetOption>
          </PlanetSelector>
          <PlanetTitle>{planetTitle}</PlanetTitle>
          <PlanetDescription>{planetDescription}</PlanetDescription>
          <hr />
          <PlanetDetailsContainer>
            <DetailColumn>
              <DetailLabel>AVG. DISTANCE</DetailLabel>
              <DetailValue>{planetDistance}</DetailValue>
            </DetailColumn>
            <DetailColumn>
              <DetailLabel>Est. travel time</DetailLabel>
              <DetailValue>{travelTime}</DetailValue>
            </DetailColumn>
          </PlanetDetailsContainer>
        </PlanetInfoContainer>
      </PlanetsContainer>
    </DestinationViewContainer>
  );
};
