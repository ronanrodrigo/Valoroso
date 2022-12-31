import React, { useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
} from 'react-native'
import MakerChooserView, { Maker } from './src/maker/MakerChooserView'
import VehicleTypeChooserView, {
    VehicleType,
} from './src/vehicle-type/VehicleTypeChooserView'

const App = () => {
    const isDarkMode = useColorScheme() === 'dark'
    const vehicleTypes: VehicleType[] = [
        { id: 'car', title: 'Carro', icon: '🚘' },
        { id: 'motor_bike', title: 'Moto', icon: '🏍️' },
        { id: 'truck', title: 'Caminhão', icon: '🚛' },
    ]
    const brands: Maker[] = [
        { id: 'honda', title: 'Honda', iconName: 'honda' },
        { id: 'acura', title: 'Acura', iconName: 'acura' },
        { id: 'lexus', title: 'Lexus', iconName: 'lexus' },
        { id: 'toyota', title: 'Toyota', iconName: 'toyota' },
    ]
    const [selectedVehicleType, setVehiclyType] = useState(vehicleTypes[0])
    const [selectedBrand, setBrand] = useState(brands[0])

    const backgroundStyle = {
        backgroundColor: isDarkMode ? 'black' : 'white',
    }

    return (
        <SafeAreaView style={{ ...backgroundStyle, margin: 20 }}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                style={backgroundStyle}>
                <VehicleTypeChooserView
                    types={vehicleTypes}
                    selectedType={selectedVehicleType}
                    onSelected={setVehiclyType}
                />
                <MakerChooserView
                    brands={brands}
                    selectedBrand={selectedBrand}
                    onSelected={setBrand}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default App
