import { Pressable } from 'react-native';
import { Image } from 'expo-image';
import { FC } from 'react';

export interface IpropsSocialBtn {
    imageName: keyof typeof imageMap;
    onpress(): void;
}
const imageMap = {
    google: require('../assets/images/google.png'),
    apple: require('../assets/images/apple.png'),
    facebook: require('../assets/images/fackbook.png'),
};

const SocialBtn: FC<IpropsSocialBtn> = ({ imageName, onpress }) => {
    const imageSource = imageMap[imageName];
    return (
        <Pressable
            className='w-16 h-16 bg-white border-1 border-grayPrimary rounded-full items-center justify-center active:bg-grayPrimary mr-3'
            onPress={onpress}
        >
            <Image
                source={imageSource}
                contentFit='cover'
                style={{ width: 24, height: 24 }}
            />
        </Pressable>
    );
};

export default SocialBtn;
