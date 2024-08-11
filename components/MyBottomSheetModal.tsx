import { Text } from 'react-native';
import React, { FC, useCallback, useMemo, useRef } from 'react';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { wp } from '../utils/responsiveUnit';
import CustomBackdrop from './CustomBackdrop';

interface IProps {
    bottomSheetModalRef: React.RefObject<BottomSheetModal>;
}

const MyBottomSheetModal: FC<IProps> = ({ bottomSheetModalRef }) => {
    const snapPoints = useMemo(() => ['40%'], []);
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
                    overflow: 'hidden',
                }}
                backdropComponent={(backdropProps) => (
                    <CustomBackdrop
                        {...backdropProps}
                        closeModal={closeModal}
                    />
                )}
                handleComponent={null}
            >
                <BottomSheetView className='flex-1'>
                    <Text>Awesome 🎉</Text>
                </BottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};

export default MyBottomSheetModal;
