import { Stack } from 'expo-router';
import '../../global.css';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                {/* Make the status bar transparent */}
                <Stack>
                    <Stack.Screen
                        name='index'
                        options={{
                            headerShown: false,
                            navigationBarHidden: true,
                        }}
                    />
                </Stack>
            </GestureHandlerRootView>
        </>
    );
}
