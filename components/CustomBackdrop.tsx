import Animated, {
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import { useMemo } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface CustomBackdropProps extends BottomSheetBackdropProps {
    closeModal: () => void; // Add the close prop
}

const CustomBackdrop: React.FC<CustomBackdropProps> = ({
    animatedIndex,
    style,
    closeModal,
}) => {
    // animated variables
    const containerAnimatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(animatedIndex.value, [-1, 0], [0, 1]),
    }));

    // styles
    const containerStyle = useMemo(
        () => [
            style,
            {
                backgroundColor: 'rgba(0,0,0,0.8)',
            },
            containerAnimatedStyle,
        ],
        [style, containerAnimatedStyle]
    );

    return (
        <TouchableWithoutFeedback onPress={closeModal}>
            <Animated.View style={containerStyle}>
                <BlurView
                    intensity={30}
                    tint='light'
                    style={[StyleSheet.absoluteFill]}
                ></BlurView>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default CustomBackdrop;
