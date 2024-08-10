import { Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IpropsAppButton {
    title: string;
    onpress(): void;
    backgroundColor?: string;
    textColor?: string;
}

const AppButton: FC<IpropsAppButton> = ({
    title,
    onpress,
    textColor = 'white',
    backgroundColor = '#1A237E',
}) => {
    return (
        <TouchableOpacity
            onPress={onpress}
            style={[styles.button, { backgroundColor }]}
        >
            <Text
                style={{ color: textColor }}
                className='font-bold leading-5 text-lg'
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default AppButton;
const styles = StyleSheet.create({
    button: {
        height: 56,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        // Elevation for Android
        elevation: 5,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});
