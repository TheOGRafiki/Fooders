import React from "react";
import { View } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { useAuth0 } from "react-native-auth0";

const LoginCard = () => {
  const { authorize } = useAuth0();

  const handleLogin = () => {
    authorize(); // Redirect the user to the Auth0 login page
  };

  return (
    <View>
      <Card>
        <Card.Content>
          <Title>Welcome!</Title>
          <Paragraph>Please log in to continue.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handleLogin}>Login</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default LoginCard;
