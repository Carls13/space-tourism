import { Header } from "@/components/Header/Header";
import {
  TechnologyViewContainer,
  TechnologyContentContainer,
  NavigationContainer,
  OptionContainer,
  ColumnContainer,
  FirstLine,
  MainLine,
  Description,
} from "./Technology.styles";
import { OpacityNumber, ViewTitle } from "../Destination/Destination.styles";
import Image from "next/image";
import { TECHNOLOGY_DATA } from "./technologyData";
import { useState } from "react";

export const TechnologyView = () => {
  const [technology, setTechnology] = useState("LAUNCH VEHICLE");

  const technologyData = TECHNOLOGY_DATA.find(
    (item) => item.technologyTitle === technology
  );

  const { technologyTitle, technologyImage, technologyDescription } =
    technologyData;

  return (
    <TechnologyViewContainer>
      <Header />
      <ViewTitle>
        <OpacityNumber>03</OpacityNumber> SPACE LAUNCH 101
      </ViewTitle>
      <TechnologyContentContainer>
        <NavigationContainer>
          <OptionContainer onClick={() => setTechnology("LAUNCH VEHICLE")}>1</OptionContainer>
          <OptionContainer onClick={() => setTechnology("SPACEPORT")}>2</OptionContainer>
          <OptionContainer onClick={() => setTechnology("SPACE CAPSULE")}>3</OptionContainer>
        </NavigationContainer>
        <ColumnContainer>
          <FirstLine>THE TERMINOLOGY…</FirstLine>
          <MainLine>{technologyTitle}</MainLine>
          <Description>{technologyDescription}</Description>
        </ColumnContainer>
        <Image width={600} height={527} alt="Image" src={technologyImage} />
      </TechnologyContentContainer>
    </TechnologyViewContainer>
  );
};
