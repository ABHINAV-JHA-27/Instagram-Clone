import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Line from '../Line';

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        inactive:
            'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
    },
    {
        name: 'Shop',
        active:
            'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
        inactive:
            'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
    },
    {
        name: 'Profile',
        active:
            'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
        inactive:
            'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTabs, setActiveTabs] = useState('Home');
    const Icons = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTabs(icon.name)}>
            <Image source={{ uri: activeTabs === icon.name ? icon.active : icon.inactive }} style={[styles.icon, icon.name === 'Profile' ? styles.profilePic() : null, activeTabs === 'Profile' && icon.name === activeTabs ? styles.profilePic(activeTabs) : null]} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
            <Line />
            <View style={styles.container} >
                {icons.map((icon, index) => (
                    <Icons icon={icon} key={index} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        backgroundColor: '#000',
        zIndex: 999,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: (activeTabs = '') => ({
        borderRadius: 50,
        borderWidth: activeTabs === 'Profile' ? 2 : 0,
        backgroundColor: '#fff',
    })
})

export default BottomTabs;