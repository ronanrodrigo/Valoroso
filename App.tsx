import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native'
import MakerChooserView from './src/maker/MakerChooserView'
import VehicleTypeChooserView from './src/vehicle-type/VehicleTypeChooserView'

const App = () => {
    const isDarkMode = useColorScheme() === 'dark'
    const backgroundStyle = {
        backgroundColor: isDarkMode ? 'black' : '#f6f6f6',
    }

    return (
        <SafeAreaView style={{ ...backgroundStyle, flex: 1 }}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView contentInsetAdjustmentBehavior='automatic' style={{ padding: 18 }}>
                <VehicleTypeChooserView />
                <MakerChooserView />
            </ScrollView>
        </SafeAreaView>
    )
}

export default App
