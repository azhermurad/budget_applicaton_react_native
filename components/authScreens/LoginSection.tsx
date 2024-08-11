import { View, Text } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import LinkBtn from '../LinkBtn';
import AppButton from '../AppButton';
import Separator from '../Separator';
import SocialLogin from '../SocialLogin';

const LoginSection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const textChangeHandler = (value: string, name: string) => {
        // implement this logic later
        if (name == 'email') {
            setEmail(value);
            return;
        }
        setPassword(value);
    };
    return (
        <>
            <View className='flex-1 '>
                <CustomInput
                    name='email'
                    value={email}
                    placeholder='test@gmail.com'
                    textChangeHandler={textChangeHandler}
                />
                <CustomInput
                    name='password'
                    value={password}
                    placeholder='password'
                    textChangeHandler={textChangeHandler}
                    secureTextEntry={true}
                    isPassword={true}
                />
                <View className='items-end mt-3'>
                    <LinkBtn title='Forgot Password?' onpress={() => {}} />
                </View>
                <View className='my-[1.875rem]'>
                    <AppButton title='Login' onpress={() => {}} />
                </View>
                <Separator title='Or login with' />
                <SocialLogin />
            </View>
            <View className='items-center justify-center mb-10 flex-row'>
                <Text className='text-sm font-normal leading-4 text-lightDark'>
                    Don't have an account?
                </Text>
                <LinkBtn title=' Regester' onpress={() => {}} />
            </View>
        </>
    );
};

export default LoginSection;
