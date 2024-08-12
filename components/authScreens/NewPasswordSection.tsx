import { View } from 'react-native';
import CustomInput from '../CustomInput';
import { useState } from 'react';
import AppButton from '../Buttons/AppButton';

const NewPasswordSection = () => {
    const [inputData, setInputData] = useState({
        password: '',
        'repeat password': '',
    });

    const textChangeHandler = (value: string, name: string) => {
        setInputData((preState) => {
            return { ...preState, [name]: value };
        });
    };
    return (
        <View className='flex-1'>
            <CustomInput
                name='password'
                value={inputData.password}
                placeholder='password'
                textChangeHandler={textChangeHandler}
                secureTextEntry={true}
                isPassword={true}
            />
            <CustomInput
                name='repeat password'
                value={inputData['repeat password']}
                placeholder='Repeat Password'
                textChangeHandler={textChangeHandler}
                secureTextEntry={true}
                isPassword={true}
            />
            <View className='my-8'>
                <AppButton title='Continue' onpress={() => {}} />
            </View>
        </View>
    );
};

export default NewPasswordSection;
