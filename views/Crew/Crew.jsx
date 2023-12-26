/* eslint-disable @next/next/no-img-element */
import { Header } from "@/components/Header/Header";
import { CREW_DATA } from "./crewData";
import { OpacityNumber, ViewTitle } from "../Destination/Destination.styles";
import {
    CrewViewContainer,
  CrewInfoContainer,
  Role,
  Name,
  CrewDetailsColumn,
  CrewDescription,
  DotsContainer,
  Dot,
} from "./Crew.styles";
import { useState } from "react";

export const CrewView = () => {
  const [crewIndex, setCrewIndex] = useState(0);

  const crewData = CREW_DATA[crewIndex];

  const { memberTitle, memberImage, memberDescription, memberRole } = crewData;

  return (
    <CrewViewContainer>
      <Header />
      <ViewTitle>
        <OpacityNumber>02</OpacityNumber> MEET YOUR CREW
      </ViewTitle>
      <CrewInfoContainer>
        <CrewDetailsColumn>
          <Role>{memberRole}</Role>
          <Name>{memberTitle}</Name>
          <CrewDescription>{memberDescription}</CrewDescription>
          <DotsContainer>
            <Dot active={crewIndex === 0} onClick={() => setCrewIndex(0)} />
            <Dot active={crewIndex === 1} onClick={() => setCrewIndex(1)} />
            <Dot active={crewIndex === 2} onClick={() => setCrewIndex(2)} />
            <Dot active={crewIndex === 3} onClick={() => setCrewIndex(3)} />
          </DotsContainer>
        </CrewDetailsColumn>
        <img className="crew-image" src={memberImage} width={568} alt="Planet" />
      </CrewInfoContainer>
    </CrewViewContainer>
  );
};
