import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { BlurView } from 'expo-blur';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface CustomBackdropProps extends BottomSheetBackdropProps {
    closeModal: () => void; // Add the close prop
}

const CustomBackdrop: React.FC<CustomBackdropProps> = ({
    animatedIndex,
    style,
    closeModal,
}) => {
    return (
        <TouchableWithoutFeedback onPress={closeModal}>
            <BlurView
                intensity={40}
                tint='light'
                style={[StyleSheet.absoluteFill]}
            ></BlurView>
        </TouchableWithoutFeedback>
    );
};

export default CustomBackdrop;
