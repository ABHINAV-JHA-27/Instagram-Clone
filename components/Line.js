import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Line() {
    return (
        <View style={{
            borderBottomColor: "grey",
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignSelf: 'stretch',
            width: "100%"
        }} />
    )
}