import {
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Header } from "./components/index";
import StartGame from "./screen/start-game";
import GameScreen from "./screen/game-screen";
import { useState } from "react";
import { useFonts } from "expo-font";
import theme from "./constants/theme";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-semibold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "open-sans-extrabold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
    "open-sans-italic": require("./assets/fonts/OpenSans-Italic.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  const handleGameOver = (rounds) => {
    setGuessRounds(rounds);
  };

  const handleRestarGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  let content = <StartGame onStartGame={onStartGame} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userOptions={userNumber} onGameOver={handleGameOver} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Adivina el número" />
        {content}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ontainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
