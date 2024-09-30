import { Text, TouchableOpacity, View } from "react-native";
import { router, Stack, useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Huruf() {
  const router = useRouter();
  const { title } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{
          title: (title as string) || "Default Title",
        }}
      />
      <Text>HALAMAN HURUF DAN ANGKA</Text>
    </View>
  );
}
