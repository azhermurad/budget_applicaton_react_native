import React from 'react';
import { View, Text } from 'react-native';

const Separator = ({ title }: { title: string }) => {
    return (
        <View className='flex-row items-center h-4'>
            <View className={`flex-1 h-[0.094rem] bg-grayPrimary`} />
            <Text className='mx-3 font-uberMoveBold text-sm leading-4 text-lightDark'>
                {title}
            </Text>
            <View className={`flex-1 h-[0.094rem] bg-grayPrimary`} />
        </View>
    );
};

export default Separator;
