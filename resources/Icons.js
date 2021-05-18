import React from "react";

import { View, Image, TouchableOpacity } from "react-native";

export const SettingsIcon = () => {
  return (
    <TouchableOpacity style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri: "https://img.icons8.com/cotton/64/000000/settings--v1.png",
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
    </TouchableOpacity>
  );
};
