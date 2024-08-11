import AuthScreenLayout from '../../components/authScreens/authScreenLayout';
import RegisterSection from '../../components/authScreens/RegisterSection';

const register = () => {
    return (
        <AuthScreenLayout
            screenTitle='Register'
            subTitle='Create your Account'
            isBackButton
        >
            <RegisterSection />
        </AuthScreenLayout>
    );
};

export default register;
