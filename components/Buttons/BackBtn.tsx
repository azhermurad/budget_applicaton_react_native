import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

const BackBtn = ({ onpress }: { onpress(): void }) => {
    return (
        <TouchableOpacity
            className='mx-6 rounded-lg w-9 h-9 justify-center items-center'
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.19)',
            }}
            onPress={onpress}
        >
            <Image
                source={require('../../assets/images/backArrow.png')}
                contentFit='cover'
                style={{ width: 13, height: 10 }}
            />
        </TouchableOpacity>
    );
};

export default BackBtn;
