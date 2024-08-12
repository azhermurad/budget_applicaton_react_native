import AuthScreenLayout from '../../components/authScreens/authScreenLayout';
import NewPasswordSection from '../../components/authScreens/NewPasswordSection';

const newPassword = () => {
    return (
        <AuthScreenLayout
            screenTitle='New Password'
            subTitle='Enter your New Password and Login Your Account.'
            isBackButton
        >
            <NewPasswordSection />
        </AuthScreenLayout>
    );
};

export default newPassword;
