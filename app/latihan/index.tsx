import { Text, View } from "react-native";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Latihan() {
  const { title } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{
          title: (title as string) || "Default Title",
        }}
      />
      <Text>HALAMAN LATIHAN</Text>
    </View>
  );
}
