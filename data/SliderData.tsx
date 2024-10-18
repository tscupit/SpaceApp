import { ImageSourcePropType, TouchableOpacityBase } from "react-native";

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const ImageSlider = [
  {
    title: "space 1",
    image: require("@/assets/images/space1.jpg"),
    description: "this is space 1 image",
  },
  {
    title: "space 2",
    image: require("@/assets/images/space2.jpg"),
    description: "this is space 2 image",
  },
  {
    title: "space 3",
    image: require("@/assets/images/space3.jpg"),
    description: "this is space 3 image",
  },
  {
    title: "space 4",
    image: require("@/assets/images/space4.jpg"),
    description: "this is space 4 image",
  },
  {
    title: "space 5",
    image: require("@/assets/images/space5.jpg"),
    description: "this is space 5 image",
  },
];
