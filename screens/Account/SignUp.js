import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Formik } from "formik";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import { View } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledTextInput,
  StyledButton,
  ButtonText,
  Colors,
  Line,
  MessageBox,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "../../components/styles";

const { brand, darkLight, primary } = Colors;

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark"></StatusBar>
      <InnerContainer>
        {/* <PageLogo
          resizeMode="cover"
          source={require("../../assets/images/splashLogo.png")}
        /> */}
        <PageTitle>Shop and Split</PageTitle>
        {/* <SubTitle>Account Login</SubTitle> */}

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Full name"
                icon="person"
                placeholder="Please enter your name"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              ></MyTextInput>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="Please enter email address"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              ></MyTextInput>
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              ></MyTextInput>
              <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              ></MyTextInput>
              <MessageBox>...</MessageBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Sign up</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Already have an account? </ExtraText>
                <TextLink>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand}></Octicons>
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props}></StyledTextInput>
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            size={30}
            color={darkLight}
            name={hidePassword ? "md-eye-off" : "md-eye"}
          ></Ionicons>
        </RightIcon>
      )}
    </View>
  );
};

export default SignUp;
