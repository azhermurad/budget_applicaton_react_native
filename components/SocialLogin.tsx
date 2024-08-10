import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import SocialBtn, { IpropsSocialBtn } from './SocialBtn';

const SocialLogin = () => {
    const iconnames = ['apple', 'google', 'facebook'];
    return (
        <View className='flex-row   justify-center mt-7'>
            {iconnames.map((iconname, index) => (
                <SocialBtn
                    key={index}
                    imageName={iconname as 'apple' | 'google' | 'facebook'}
                    onpress={() => {
                        console.log(iconname);
                    }}
                />
            ))}
        </View>
    );
};

export default SocialLogin;
