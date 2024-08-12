import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [loaded, error] = useFonts({
        UberMove: require('../assets/fonts/UberMove-Regular.ttf'),
        'UberMove-Bold': require('../assets/fonts/UberMove-Bold.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Slot />
        </GestureHandlerRootView>
    );
};

// context api provider all will come here
export default function Root() {
    return <RootLayout />;
}
