import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { ImageSlider, ImageSliderType } from "@/data/SliderData";
import SliderItem from "./SliderItem";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Pagination from "@/components/Pagination"

type Props = {
  itemList: ImageSliderType[];
};

const Slider = ({ itemList }: Props) => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
        scrollX.value = e.contentOffset.x;
    }
  })

  return (
    <View>
      <Animated.FlatList
        data={itemList}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
      />
      <Pagination items={itemList} scrollX={scrollX} paginationIndex={paginationIndex}/>
    </View>
  );
};

export default Slider;

//const styles = StyleSheet.create{()};
