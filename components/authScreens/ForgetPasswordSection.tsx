import { View } from 'react-native';
import CustomInput from '../CustomInput';
import { useState } from 'react';
import AppButton from '../Buttons/AppButton';

const ForgetPasswordSection = ({
    bottomSheetHandler,
}: {
    bottomSheetHandler(): void;
}) => {
    const [email, setEmail] = useState('');
    const textChangeHandler = (value: string, name: string) => {
        setEmail(value);
    };
    return (
        <>
            <View className='flex-1'>
                <CustomInput
                    name='Email'
                    value={email}
                    placeholder='luminarybudgets@gmail.com'
                    textChangeHandler={textChangeHandler}
                />
                <View className='my-8'>
                    <AppButton title='Continue' onpress={bottomSheetHandler} />
                </View>
            </View>
        </>
    );
};

export default ForgetPasswordSection;
