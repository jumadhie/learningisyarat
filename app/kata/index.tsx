import { Text, View } from "react-native";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Kata() {
  const { title } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{
          title: (title as string) || "Default Title",
        }}
      />
      <Text>HALAMAN KATA ISYARAT</Text>
    </View>
  );
}
