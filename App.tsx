import { Auth0Provider } from "react-native-auth0";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  console.log(process.env.AUTH0_DOMAIN)
  const isAuth = false;

  return (
    <NavigationContainer>
      <Auth0Provider domain={process.env.AUTH0_DOMAIN!} clientId={process.env.AUTH0_CLIENT_ID!}>
        {isAuth ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        )}
      </Auth0Provider>
    </NavigationContainer>
  );
};

// export default App;
