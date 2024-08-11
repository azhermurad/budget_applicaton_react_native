import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [loaded, error] = useFonts({
        UberMove: require('../assets/fonts/UberMove-Regular.ttf'),
        'UberMove-Bold': require('../assets/fonts/UberMove-Bold.ttf'),
        CaliforniaRegular: require('../assets/fonts/CaliforniaRegular.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return <Slot />;
};

// context api provider all will come here
export default function Root() {
    console.log('first calling function');
    return <RootLayout />;
}
