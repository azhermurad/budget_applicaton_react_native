import { useCallback, useRef } from 'react';
import AuthScreenLayout from '../../components/authScreens/authScreenLayout';
import ForgetPasswordSection from '../../components/authScreens/ForgetPasswordSection';
import RegisterSection from '../../components/authScreens/RegisterSection';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import AppButton from '../../components/Buttons/AppButton';

const forgetPassword = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const bottomSheetHandler = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <AuthScreenLayout
            screenTitle='Forgot Password'
            subTitle='Enter your email Account to reset Password'
            isBackButton
            bottomSheetModalRef={bottomSheetModalRef}
        >
            <ForgetPasswordSection bottomSheetHandler={bottomSheetHandler} />
        </AuthScreenLayout>
    );
};

export default forgetPassword;
