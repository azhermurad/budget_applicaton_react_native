import { View, Text } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import LinkBtn from '../Buttons/LinkBtn';
import AppButton from '../Buttons/AppButton';
import Checkbox from 'expo-checkbox';
import { useRouter } from 'expo-router';

const RegisterSection = () => {
    const [isChecked, setChecked] = useState(false);
    const router = useRouter();
    const [inputData, setInputData] = useState({
        fullname: '',
        email: '',
        password: '',
        repeatpassword: '',
    });

    const textChangeHandler = (value: string, name: string) => {
        setInputData((preState) => {
            return { ...preState, [name]: value };
        });
    };
    return (
        <>
            <View className='flex-1'>
                <CustomInput
                    name='fullname'
                    value={inputData.fullname}
                    placeholder='Luminary Budgets'
                    textChangeHandler={textChangeHandler}
                />
                <CustomInput
                    name='email'
                    value={inputData.email}
                    placeholder='luminarybudgets@gmail.com'
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
                <CustomInput
                    name='repeatpassword'
                    value={inputData.repeatpassword}
                    placeholder='Repeat Password'
                    textChangeHandler={textChangeHandler}
                    secureTextEntry={true}
                    isPassword={true}
                />

                <View className='flex-row items-center mt-3'>
                    <Checkbox
                        // style={styles.checkbox}
                        className='rounded mr-2'
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#9013FE' : undefined}
                    />
                    <Text className='text-sm font-uberMove leading-4 text-lightDark'>
                        Agree with
                    </Text>
                    <LinkBtn title=' Terms & Condition' onpress={() => {}} />
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
