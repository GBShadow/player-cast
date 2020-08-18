import React from "react";
import { StatusBar } from "expo-status-bar";
import Player from './src/pages/Player'

const App = () => {
  return (
    <>
      <StatusBar style="light" translucent backgroundColor="#000" />
      <Player />
    </>
  );
}

export default App;
