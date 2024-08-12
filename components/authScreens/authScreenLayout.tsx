import { View, Text, ScrollView, Dimensions } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import BackBtn from '../Buttons/BackBtn';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import MyBottomSheetModal from '../MyBottomSheetModal';

interface IPropsAuthScreenLayout {
    screenTitle: string;
    subTitle: String;
    children: ReactNode;
    isBackButton: boolean;
    bottomSheetModalRef?: React.RefObject<BottomSheetModal>;
    isBottomSheetModal?: boolean;
}

const AuthScreenLayout: FC<IPropsAuthScreenLayout> = ({
    children,
    screenTitle,
    subTitle,
    isBackButton,
    bottomSheetModalRef = null,
    isBottomSheetModal = false,
}) => {
    const router = useRouter();
    const { height, width } = Dimensions.get('screen');
    const { top: insectTop } = useSafeAreaInsets();

    const goBackHander = () => {
        if (router.canGoBack()) {
            router.back();
        }
    };

    return (
        <View className='flex-1 relative'>
            <LinearGradient className='flex-1' colors={['#1A237E', '#64B5F6']}>
                <Image
                    source={require('../../assets/images/layout.png')}
                    style={{
                        width: width * (95 / 100),
                        height: height * (35 / 100),
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/*  headersection */}
                    <View
                        style={{
                            height: height * (30 / 100),
                        }}
                    >
                        <View
                            className='flex-1 justify-between'
                            style={{
                                height: '100%',
                            }}
                        >
                            <View style={{ marginTop: insectTop + 10 }}>
                                {isBackButton && router.canGoBack() && (
                                    <BackBtn onpress={goBackHander} />
                                )}
                            </View>

                            <View className=' mx-6 max-w-[286px] mb-6'>
                                <Text
                                    // style={{ fontFamily: 'CaliforniaRegular' }}
                                    className='font-uberMoveBold text-[35px] text-white leading-[3rem]'
                                >
                                    {screenTitle}
                                </Text>
                                <Text className='font-uberMove text-[13px] leading-4 text-white mt-4'>
                                    {subTitle}
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* input,buttons,etc */}
                    <View
                        style={{ minHeight: height * (70 / 100) }}
                        className=' bg-white rounded-t-[50px] px-6 pt-[0.625rem]'
                    >
                        {children}
                    </View>

                    {/* BottomSheet */}
                    {isBottomSheetModal && (
                        <MyBottomSheetModal
                            bottomSheetModalRef={bottomSheetModalRef as any}
                        />
                    )}
                </ScrollView>
            </LinearGradient>
        </View>
    );
};

export default AuthScreenLayout;
