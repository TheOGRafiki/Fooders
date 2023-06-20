import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Avatar, Button } from "react-native-paper";

const LoginScreen = () => {
  const handleLogin = () => {
    // Implement your Auth0 login logic here
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
  };

  const handleTwitterLogin = () => {
    // Implement Twitter login logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Avatar.Icon icon="account" size={100} style={styles.avatar} />
        <TextInput label="Email" mode="outlined" style={styles.input} />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Login
        </Button>
        <View style={styles.socialButtonsContainer}>
          <Button
            mode="outlined"
            onPress={handleGoogleLogin}
            style={[styles.button, styles.googleButton]}
            icon="google"
            labelStyle={styles.socialButtonLabel}
          >
            Google
          </Button>
          <Button
            mode="outlined"
            onPress={handleTwitterLogin}
            style={[styles.button, styles.twitterButton]}
            icon="twitter"
            labelStyle={styles.socialButtonLabel}
          >
            Twitter
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5E8C5",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#C5E8C5",
    padding: 20,
    borderRadius: 10,
  },
  avatar: {
    backgroundColor: "#C5E8C5",
    marginBottom: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  input: {
    marginBottom: 10,
    borderRadius: 30,
  },
  button: {
    marginBottom: 10,
    backgroundColor: "#9BCF9B",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  googleButton: {
    backgroundColor: "#DB4437",
    flex: 1,
    marginRight: 5,
  },
  twitterButton: {
    backgroundColor: "#1DA1F2",
    flex: 1,
    marginLeft: 5,
  },
  socialButtonLabel: {
    color: "#FFFFFF",
  },
});

export default LoginScreen;
