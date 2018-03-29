/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Button, StyleSheet } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";

import Home from "./scenes/Home";
import Splash from "./scenes/Splash";

const App = () => (
    <Router>
        <Stack key="root">
            <Scene key="home" component={Home} title="Home" />
            <Scene key="splash" component={Splash} />
        </Stack>
    </Router>
);

export default App;
