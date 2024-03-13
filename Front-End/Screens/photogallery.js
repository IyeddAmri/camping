import React from "react";
import SvgComponent from "../assets/SVG/svg";
import ProgressBar from "../components/ProgressBar";
import { View } from "react-native-animatable";

export default function PhotoGallery() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {/* <SvgComponent /> */}
            <ProgressBar progress={50} />
        </View>
    );
}
