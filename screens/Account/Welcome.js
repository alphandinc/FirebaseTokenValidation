import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  InnerContainer,
  PageTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from "../../components/styles";

const Welcome = () => {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <InnerContainer>
        <WelcomeImage
          resizeMode="cover"
          source={require("../../assets/images/icon.png")}
        ></WelcomeImage>
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome!</PageTitle>
          <StyledFormArea>
            <Avatar
              resizeMode="cover"
              source={require("../../assets/images/splashLogo.png")}
            ></Avatar>
            <Line></Line>
            <StyledButton onPress={() => {}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
