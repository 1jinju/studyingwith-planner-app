import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1,
    justify-content: center,
    align-items: center,
    background-color: #54b7f9;
`;
const StyledText = styled.Text`
    font-size: 30px;
    color: #ffffff;
`;

export const Home = () => {
  return (
    <Container>
        <StyledText>Home</StyledText>
    </Container>
);
};

export const Time = () => {
  return (
    <Container>
        <StyledText>Time</StyledText>
    </Container>
);
};

export const Statistics = () => {
  return (
    <Container>
        <StyledText>Statistics</StyledText>
    </Container>
);
};