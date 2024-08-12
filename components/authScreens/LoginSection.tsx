import { View, Text } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import LinkBtn from '../Buttons/LinkBtn';
import AppButton from '../Buttons/AppButton';
import Separator from '../Separator';
import SocialLogin from '../SocialLogin';
import { useRouter } from 'expo-router';

const LoginSection = () => {
    const router = useRouter();
    const [inputData, setInputData] = useState({
        email: '',
        password: '',
    });

    const textChangeHandler = (value: string, name: string) => {
        setInputData((preState) => {
            return { ...preState, [name]: value };
        });
    };

    console.log(inputData);
    return (
        <>
            <View className='flex-1'>
                <CustomInput
                    name='email'
                    value={inputData.email}
                    placeholder='test@gmail.com'
                    textChangeHandler={textChangeHandler}
                />
                <CustomInput
                    name='password'
                    value={inputData.password}
                    placeholder='password'
                    textChangeHandler={textChangeHandler}
                    secureTextEntry={true}
                    isPassword={true}
                />
                <View className='items-end mt-3'>
                    <LinkBtn
                        title='Forgot Password?'
                        onpress={() => {
                            router.push('/forgetPassword');
                        }}
                    />
                </View>
                <View className='my-[1.875rem]'>
                    <AppButton title='Login' onpress={() => {}} />
                </View>
                <Separator title='Or login with' />
                <SocialLogin />
            </View>
            <View className='items-center justify-center mb-10 flex-row'>
                <Text className='text-sm font-uberMove leading-4 text-lightDark'>
                    Don't have an account?
                </Text>
                <LinkBtn
                    title=' Register'
                    onpress={() => {
                        router.push('/register');
                    }}
                />
            </View>
        </>
    );
};

export default LoginSection;
