import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FOrmikPostUploader from './FOrmikPostUploader';

const AddNewPost = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Header navigation={navigation} />
            <FOrmikPostUploader navigation={navigation} />
        </View>
    );
}

const Header = ({ navigation }) => (
    <View style={styles.headerContainer} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png' }} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text style={styles.headerText} >New Post</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    headerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 20,
        marginRight: 25,
    }
})

export default AddNewPost;