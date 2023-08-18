import { StyleSheet, View } from "react-native";
import LoginCard from "./components/LoginCard";
import Auth0, { Auth0Provider } from "react-native-auth0";
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from "@env";


export const auth0 = new Auth0({
  clientId: AUTH0_CLIENT_ID,
  domain: AUTH0_DOMAIN,
});

export default function App() {
  return (
      <View style={styles.container}>
        <LoginCard />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
