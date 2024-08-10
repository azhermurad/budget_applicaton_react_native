import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../../components/CustomInput';
import { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppButton from '../../components/AppButton';
import Separator from '../../components/Separator';
import { StatusBar } from 'expo-status-bar';
import SocialLogin from '../../components/SocialLogin';
import LinkBtn from '../../components/LinkBtn';

export default function Index() {
    const ref = useRef();
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
            <View className='flex-1'>
                <LinearGradient
                    // Background Linear Gradient
                    className='flex-1'
                    colors={['#1A237E', '#64B5F6']}
                >
                    <View className='flex-1 justify-end '>
                        <View className=' border-cyan-600 border-2 mx-6 max-w-[286px] mb-6'>
                            <Text className='font-bold  text-[35px] text-white leading-[3rem]'>
                                Sign in to your Accounts
                            </Text>
                            <Text className='font-normal text-[13px] leading-4 text-white mt-4'>
                                Sign in to your Account
                            </Text>
                        </View>
                    </View>
                    <View className='flex-[3]  bg-white rounded-t-[50px] px-6 pt-[0.625rem]'>
                        <View className='flex-1'>
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
                                <LinkBtn
                                    title='Forgot Password?'
                                    onpress={() => {}}
                                />
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
                    </View>
                </LinearGradient>
            </View>
            <StatusBar style='light' />
        </>
    );
}
