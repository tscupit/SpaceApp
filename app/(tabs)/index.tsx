import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from "@/components/Themed";
import { ImageSlider } from "@/data/SliderData";
import Slider from "@/components/Slider";

export default function TabOneScreen() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Slider itemList={ImageSlider}/>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
