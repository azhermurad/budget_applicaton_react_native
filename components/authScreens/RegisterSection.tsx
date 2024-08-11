import { View, Text } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import LinkBtn from '../Buttons/LinkBtn';
import AppButton from '../Buttons/AppButton';
import Separator from '../Separator';
import SocialLogin from '../SocialLogin';
import { useRouter } from 'expo-router';

const RegisterSection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

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
            <View className='flex-1'>
                <CustomInput
                    name='fullname'
                    value={''}
                    placeholder='Luminary Budgets'
                    textChangeHandler={textChangeHandler}
                />
                <CustomInput
                    name='Email'
                    value={email}
                    placeholder='luminarybudgets@gmail.com'
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
                <CustomInput
                    name='password'
                    value={password}
                    placeholder='Repeat Password'
                    textChangeHandler={textChangeHandler}
                    secureTextEntry={true}
                    isPassword={true}
                />

                <View className='items-end mt-3'>
                    <LinkBtn title='Forgot Password?' onpress={() => {}} />
                </View>
                <View className='my-[1.875rem]'>
                    <AppButton title='Register' onpress={() => {}} />
                </View>
            </View>
            <View className='items-center justify-center mb-10 flex-row'>
                <Text className='text-sm font-uberMove leading-4 text-lightDark'>
                    Already have an account?
                </Text>
                <LinkBtn
                    title=' Login'
                    onpress={() => {
                        router.dismissAll();
                    }}
                />
            </View>
        </>
    );
};

export default RegisterSection;
