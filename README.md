<div style="text-align: center;">
<h1 align="center">
    Fooders
    <br />
    <br />
    <img src="https://e0.pxfuel.com/wallpapers/174/289/desktop-wallpaper-printable-customizable-restaurant-logo-templates-food-logo.jpg" width=100/>
    <h6>logo place holder</h6>
</h1>

![React Version](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Node Version](https://img.shields.io/badge/Node-v20.5.0-green.svg)
![TypeScript Coverage](https://img.shields.io/badge/TypeScript-99.4%25-brightgreen.svg)
![Javascript Coverage](https://img.shields.io/badge/JavaScript-99.4%25-brightgreen.svg)
![HTML Coverage](https://img.shields.io/badge/HTML-99.4%25-brightgreen.svg)
![Other Coverage](https://img.shields.io/badge/CSS-0.3%25-orange.svg)

</div>
<hr />

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Components](#components)

## The Problem

In today's fast-paced world, finding and preparing a delicious meal that caters to individual dietary preferences and restrictions can be challenging. While there are countless recipes available online, sifting through them to find dishes that match one's taste and dietary needs can be time-consuming and overwhelming. Furthermore, identifying nearby restaurants that offer similar dishes for those times when cooking is not an option can also be a daunting task.

To address these challenges, we are developing "Fooders," a mobile application built using React Native and Expo. "Fooders" aims to simplify the process of discovering, comparing, and preparing various recipes from diverse cuisines. The application will provide users with a streamlined and personalized experience to find recipes that align with their dietary preferences and restrictions.

## Key Challenges

1. **Recipe Diversity and Personalization**: With a multitude of recipes available online, users often struggle to find dishes that suit their dietary requirements and preferences. "Fooders" needs to effectively filter and present recipes based on users' tastes, dietary restrictions, and available ingredients.

2. **Time-Efficient Meal Planning**: Planning meals that fit busy schedules can be a challenge. The application should help users quickly identify recipes with manageable preparation times, enabling them to make informed decisions about what to cook.

3. **Nutritional Information**: Nutritional considerations play a significant role in meal choices. The app should provide accurate nutritional information for recipes, helping users make health-conscious decisions.

4. **Restaurant Recommendations**: While cooking at home is ideal, there are times when users prefer dining out. "Fooders" should also assist users in discovering nearby restaurants that offer dishes similar to those they enjoy cooking.

5. **User-Friendly Interface**: To ensure a positive user experience, the application's interface should be intuitive, visually appealing, and easy to navigate, enhancing user engagement and satisfaction.

## The Solution

"Fooders" is a comprehensive mobile application that addresses the challenges of finding, planning, and enjoying meals that align with individual preferences and dietary needs. By leveraging React Native and Expo, we aim to provide a seamless cross-platform experience that empowers users to:

- **Search and Discover**: Explore a wide range of recipes from various cuisines, customized based on dietary preferences and restrictions.

- **Compare Recipes**: Compare ingredients, preparation time, and nutritional information of different recipes to make informed choices.

- **Personalized Recommendations**: Receive tailored recipe recommendations that match individual preferences, helping users discover new dishes they'll love.

- **Nutritional Insights**: Access accurate nutritional information for recipes, making it easier to maintain a balanced diet.

- **Restaurant Locator**: Find nearby restaurants that offer dishes similar to the recipes users enjoy, ensuring dining options beyond home-cooked meals.

With "Fooders," we are simplifying the journey from recipe discovery to meal preparation, helping users make delightful and mindful food choices that cater to their unique needs and preferences.
Absolutely, here are the sections you've requested for your GitHub README:

## Getting Started

To get started with the "Fooders" mobile application, follow these steps:

## Prerequisites

Before you begin, ensure you have the following prerequisites:

- **React Native Environment**: Set up your React Native development environment. If you haven't already, follow the [official React Native documentation](https://reactnative.dev/docs/environment-setup) to install the required tools.

- **Auth0 Account**: You need an Auth0 account to enable user authentication. Sign up for a free account at [Auth0](https://auth0.com/).

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/TheOGRafiki/Fooders.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Fooder
   ```

3. Install the project dependencies:

   ```bash
   npm install or npm i
   ```

4. Set up your Auth0 credentials:

   - Create a `.env` file in the project root.
   - Add your Auth0 client ID and domain to the `.env` file:

     ```env
     AUTH0_CLIENT_ID=your-auth0-client-id
     AUTH0_DOMAIN=your-auth0-domain
     ```

## Usage

1. Run the app:

   - For iOS:

     ```bash
     npm run ios
     ```

   - For Android:

     ```bash
     npm run android
     ```

   - For Web:
     ```bash
     npm run web
     ```

   The app will open in the simulator or on a connected device.

2. Explore the "Fooders" app, including the user authentication interface provided by the `LoginCard` component.

Certainly, here's the description of the given React Native code for your GitHub README:

# Components

###  App

The `App` component is the entry point of the "Fooders" mobile application built using React Native. It sets up the app structure and renders the `LoginCard` component to provide a user authentication interface.

#### Code Overview

- Import Statements: Import necessary components, including `View`, `LoginCard`, `Auth0`, `Auth0Provider`, and environment variables for Auth0 configuration.

- Auth0 Configuration: Initialize the `auth0` instance using the provided `AUTH0_CLIENT_ID` and `AUTH0_DOMAIN` from environment variables.

- `App` Component: The main component that renders the `LoginCard` component wrapped within a `View`. This sets up the basic app layout.

- `styles` Object: StyleSheet rules to define the styling for the `container` View. The container is centered both horizontally and vertically, providing the main visual structure of the app.

#### Usage

1. Import necessary components and dependencies at the top of your React Native file.

   ```javascript
   import { StyleSheet, View } from "react-native";
   import LoginCard from "./components/LoginCard";
   import Auth0, { Auth0Provider } from "react-native-auth0";
   import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from "@env";
   ```

2. Initialize the `auth0` instance using the provided Auth0 client ID and domain.

   ```javascript
   export const auth0 = new Auth0({
     clientId: AUTH0_CLIENT_ID,
     domain: AUTH0_DOMAIN,
   });
   ```

3. Define the main `App` component that renders the `LoginCard` component within a `View`.

   ```javascript
   export default function App() {
     return (
       <View style={styles.container}>
         <LoginCard />
       </View>
     );
   }
   ```

4. Define the `styles` object to customize the styling of the container.

   ```javascript
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: "#fff",
       alignItems: "center",
       justifyContent: "center",
     },
   });
   ```

### LoginScreen Component

The `LoginScreen` component provides an interface for users to log in to the "Fooders" mobile application. It uses Auth0 for authentication and offers options to log in with email and password, as well as social media accounts.

#### Code Overview

- **Import Statements**: Import necessary components from React Native and external libraries, including `View`, `StyleSheet`, `auth0`, `AUTH0_API_AUDIENCE`, `TextInput`, `Avatar`, and `Button`.

- **`handleLogin` Function**: Handles the user login process based on the specified authentication scope. It uses the `auth0` instance to authorize the user and request access to the specified scope.

- **`LoginScreen` Component**: Renders the main content of the login screen. It includes an avatar, input fields for email and password, a login button, and social media login buttons.

- **`styles` Object**: Defines the StyleSheet rules to style various elements within the `LoginScreen` component.

#### Usage

1. Import necessary components and dependencies at the top of your React Native file.

   ```javascript
   import React from "react";
   import { View, StyleSheet } from "react-native";
   import { auth0 } from "../App";
   import { AUTH0_API_AUDIENCE } from "@env";
   import { TextInput, Avatar, Button } from "react-native-paper";
   ```

2. Define the `handleLogin` function to handle user login with the specified scope.

   ```javascript
   const handleLogin = (
     scope: "offline_access" | "twitter" | "google-oauth2"
   ) => {
     auth0.webAuth.authorize({
       scope,
       audience: AUTH0_API_AUDIENCE,
       prompt: "login",
     });
   };
   ```

3. Implement the `LoginScreen` component, which renders the login interface.

   ```javascript
   const LoginScreen = () => {
     return (
       <View style={styles.container}>
         {/* Content of the login screen */}
       </View>
     );
   };
   ```

4. Customize the styling of the `LoginScreen` component using the defined `styles` object.

   ```javascript
   const styles = StyleSheet.create({
     // StyleSheet rules for styling components
   });
   ```
