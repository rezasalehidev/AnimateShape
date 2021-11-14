import React, { useState } from "react";
import { Animated, Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = {
    yellow: "#FFC46B",
    pink: "#FF82C3",
    violet: "#8A00D4",
    magenta: "#D527B7",
};

const SQUARE_SIZE = 60;
const VERTICAL = (height - SQUARE_SIZE) / 2;
const HORIZONTAL = (width - SQUARE_SIZE) / 2;
const Rotate = "45deg";
const TOGGLE_VALUE = new Animated.Value(0);

export default function App() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
        Animated.timing(TOGGLE_VALUE, {
            toValue: !toggle ? 1 : 0,
            duration: 1000,
        }).start();
    };

    const square1 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.5, 0.75, 1],
        outputRange: [VERTICAL, VERTICAL + 30, VERTICAL + 40, VERTICAL + 50],
    });

    const squareRotate1 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [Rotate, "90deg", "180deg", "360deg", "45deg"],
    });

    const colorRotate1 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [COLORS.yellow, COLORS.pink, COLORS.violet, COLORS.magenta, COLORS.yellow],
    });

    // 2
    const square2 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.5, 0.75, 1],
        outputRange: [HORIZONTAL, HORIZONTAL + 30, HORIZONTAL + 40, HORIZONTAL + 50],
    });

    const square2Rotate = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [Rotate, "90deg", "180deg", "360deg", "45deg"],
    });
    const colorRotate2 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [COLORS.Pink, COLORS.yellow, COLORS.violet, COLORS.magenta, COLORS.Pink],
    });

    // 3
    const square3 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.5, 0.75, 1],
        outputRange: [VERTICAL, VERTICAL - 30, VERTICAL - 40, VERTICAL - 50],
    });

    const square3Rotate = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [Rotate, "90deg", "180deg", "360deg", "45deg"],
    });

    const colorRotate3 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [COLORS.magenta, COLORS.pink, COLORS.violet, COLORS.yellow, COLORS.magenta],
    });

    // 4
    const square4 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.5, 0.75, 1],
        outputRange: [HORIZONTAL, HORIZONTAL - 30, HORIZONTAL - 40, HORIZONTAL - 50],
    });

    const square4Rotate = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [Rotate, "90deg", "180deg", "360deg", "45deg"],
    });
    const colorRotate4 = TOGGLE_VALUE.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [COLORS.violet, COLORS.pink, COLORS.yellow, COLORS.magenta, COLORS.violet],
    });

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => handleToggle()}>
                <Animated.View style={StyleSheet.flatten([styles.square, styles.square1, { backgroundColor: colorRotate1, top: square1, transform: [{ rotate: squareRotate1 }] }])} />
                <Animated.View style={StyleSheet.flatten([styles.square, styles.square2, { left: square2, transform: [{ rotate: square2Rotate }] }])} />
                <Animated.View style={StyleSheet.flatten([styles.square, styles.square3, { top: square3, transform: [{ rotate: square3Rotate }] }])} />
                <Animated.View style={StyleSheet.flatten([styles.square, styles.square4, { left: square4, transform: [{ rotate: square4Rotate }] }])} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        borderRadius: 8,
        position: "absolute",
        top: VERTICAL,
        left: HORIZONTAL,
        transform: [{ rotate: "45deg" }],
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.8,
        elevation: 10,
    },
    square1: {
        backgroundColor: COLORS.yellow,
        shadowColor: COLORS.yellow,
        zIndex: 4,
    },
    square2: {
        backgroundColor: COLORS.pink,
        shadowColor: COLORS.pink,
        zIndex: 3,
    },
    square3: {
        backgroundColor: COLORS.magenta,
        shadowColor: COLORS.magenta,
        zIndex: 2,
    },
    square4: {
        backgroundColor: COLORS.violet,
        shadowColor: COLORS.violet,
        zIndex: 1,
    },
});
