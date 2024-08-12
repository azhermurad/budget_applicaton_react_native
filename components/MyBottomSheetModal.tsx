import { Text, View } from 'react-native';
import React, { FC, useCallback, useMemo, useRef } from 'react';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { wp } from '../utils/responsiveUnit';
import CustomBackdrop from './CustomBackdrop';
import AppButton from './Buttons/AppButton';
import { Image } from 'expo-image';

interface IProps {
    bottomSheetModalRef: React.RefObject<BottomSheetModal>;
}

const MyBottomSheetModal: FC<IProps> = ({ bottomSheetModalRef }) => {
    const snapPoints = useMemo(() => ['35%'], []);
    // Handle closing the modal
    const closeModal = useCallback(() => {
        bottomSheetModalRef.current?.dismiss();
    }, []);

    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                style={{
                    width: wp(100),
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                }}
                backgroundStyle={{
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                }}
                backdropComponent={(backdropProps) => (
                    <CustomBackdrop
                        {...backdropProps}
                        closeModal={closeModal}
                    />
                )}
                handleComponent={() => (
                    <View
                        style={{
                            alignItems: 'center',
                        }}
                    >
                        <View
                            className='w-[5.75rem] h-[5.75rem] rounded-2xl bg-[#1A237E] absolute -top-12 items-center justify-center'
                            style={{}}
                        >
                            <Image
                                source={require('../assets/images/message.png')}
                                contentFit='cover'
                                className='w-12 h-12'
                                style={{ width: 48, height: 48 }}
                            />
                        </View>
                    </View>
                )}
            >
                <BottomSheetView className='flex-1 px-6'>
                    <View className='mt-16'>
                        <Text className='font-uberMoveBold text-2xl text-lightDark text-center mb-4'>
                            Check your email
                        </Text>
                        <Text className='font-uberMove font-medium text-lightDark text-base text-center leading-4'>
                            We have send a instructions to recover your password
                            to your email
                        </Text>
                    </View>
                    <View className='mt-7'>
                        <AppButton title='Done' onpress={() => {}} />
                    </View>
                </BottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};

export default MyBottomSheetModal;
