import { StatusBar } from 'expo-status-bar';
import AuthScreenLayout from '../../components/authScreens/authScreenLayout';
import LoginSection from '../../components/authScreens/LoginSection';

LoginSection;

export default function Index() {
    return (
        <>
            <AuthScreenLayout
                screenTitle='Sign in to your Accounts'
                subTitle='Sign in to your Account'
            >
                <LoginSection />
            </AuthScreenLayout>
            <StatusBar style='light' />
        </>
    );
}
