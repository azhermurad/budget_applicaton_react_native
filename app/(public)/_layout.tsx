import { Stack } from 'expo-router';
import '../../global.css';

export default function RootLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name='index'
                    options={{
                        headerShown: false,
                        navigationBarHidden: true,
                        statusBarTranslucent: true,
                    }}
                />
                <Stack.Screen
                    name='register'
                    options={{
                        headerShown: false,
                        navigationBarHidden: true,
                        statusBarTranslucent: true,
                    }}
                />
                <Stack.Screen
                    name='forgetPassword'
                    options={{
                        headerShown: false,
                        navigationBarHidden: true,
                        statusBarTranslucent: true,
                    }}
                />
            </Stack>
        </>
    );
}
