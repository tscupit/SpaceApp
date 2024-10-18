import React from "react";
import { StyleSheet } from "react-native";

import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";

export default function Allied({ path }: { path: string }) {
  return (
    <View>
      <View>
        <ExternalLink href="https://portalmain.azurewebsites.net/Identity/Account/Login?ReturnUrl=%2Fmain%2Findex">
          <Text>Tap here to go to AlliedStores.com</Text>
        </ExternalLink>
      </View>
    </View>
  );
}
