import { View, Text } from 'react-native';
import React from 'react';
import AuthScreenLayout from '../../components/authScreens/authScreenLayout';
import RegisterSection from '../../components/authScreens/RegisterSection';

const register = () => {
    return (
        <AuthScreenLayout screenTitle='Register' subTitle='Create your Account'>
            <RegisterSection />
        </AuthScreenLayout>
    );
};

export default register;
