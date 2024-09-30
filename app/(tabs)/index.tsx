import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

const data = [
  {
    id: "1",
    title: "HURUF & ANGKA",
    path: "/huruf",
    imageThumbnail: require("./../../assets/images/abc.png"),
  },
  {
    id: "2",
    title: "KATA ISYARAT",
    path: "/kata",
    imageThumbnail: require("./../../assets/images/kataisyarat.png"),
  },
  {
    id: "3",
    title: "TEBAK KATA",
    path: "/tebak",
    imageThumbnail: require("./../../assets/images/tebakkata.png"),
  },
  {
    id: "4",
    title: "LATIHAN",
    path: "/latihan",
    imageThumbnail: require("./../../assets/images/latihan.png"),
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;
  const numColumns = 2; // Tentukan jumlah kolom yang diinginkan
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: item.path,
          params: { title: item.title },
        })
      }
      style={{
        margin: 6,
        width: screenWidth / numColumns - 20,
      }}
    >
      <View style={styles.item}>
        <Image style={styles.logoMenu} source={item.imageThumbnail} />
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 24,
          paddingTop: 24,
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require("./../../assets/images/dashboard.png")}
        />
        <Text style={styles.textLogo}>Isyarat Pintar</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns} // Menetapkan 2 kolom
        style={styles.row}
        columnWrapperStyle={{ justifyContent: "flex-start" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight, // Padding manual berdasarkan tinggi status bar
    backgroundColor: "#f8f8f8",

    alignItems: "center",
  },
  row: {},
  item: {
    backgroundColor: "#4CAF",
    paddingVertical: 24,
    borderRadius: 8,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "400",
  },
  tinyLogo: {
    width: 280,
    height: 100,
    objectFit: "contain",
  },
  logoMenu: {
    width: 210,
    height: 120,
    marginBottom: 12,
    // resizeMode: "contain",
    objectFit: "contain",
  },
  textLogo: {
    fontSize: 28,
    fontWeight: "500",
  },
});
