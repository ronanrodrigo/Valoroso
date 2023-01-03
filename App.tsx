import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native'
import MakerChooserView, { makers } from './src/maker/MakerChooserView'
import VehicleTypeViewModel from './src/vehicle-type/entities/VehicleTypeViewModel'
import VehicleTypeChooserView from './src/vehicle-type/VehicleTypeChooserView'

const App = () => {
    const isDarkMode = useColorScheme() === 'dark'
    const [selectedVehicleType, setVehiclyType] = useState<VehicleTypeViewModel>()
    const [selectedMaker, setMaker] = useState(makers[0])
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
                <VehicleTypeChooserView selectedType={selectedVehicleType} onSelect={setVehiclyType} />
                <MakerChooserView selectedMaker={selectedMaker} onSelect={setMaker} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default App
