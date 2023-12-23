import {
  HomeViewContainer,
  ContentContainer,
  ColumnContainer,
  FirstLine,
  MainLine,
  Description,
  ButtonContainer,
  Button,
} from "./Home.styles";
import { Header } from "@/components/Header/Header";

export const HomeView = () => {
  return (
    <HomeViewContainer>
      <Header />
      <ContentContainer>
        <ColumnContainer>
          <FirstLine>SO, YOU WANT TO TRAVEL TO</FirstLine>
          <MainLine>SPACE</MainLine>
          <Description>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Description>
        </ColumnContainer>
        <ButtonContainer>
          <Button>EXPLORE</Button>
        </ButtonContainer>
      </ContentContainer>
    </HomeViewContainer>
  );
};
