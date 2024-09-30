import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Halaman Profile </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, // Padding manual berdasarkan tinggi status bar
    backgroundColor: "#f8f8f8",
  },
});
