import React, { useMemo, useState } from 'react'
import { SafeAreaView, ScrollView, StatusBar, useColorScheme } from 'react-native'
import MakerChooserView from './src/maker/MakerChooserView'
import { SelectionContext, SelectionContextProps } from './src/vehicle-type/SelectionContext'
import VehicleTypeChooserView from './src/vehicle-type/VehicleTypeChooserView'

const App = () => {
    const isDarkMode = useColorScheme() === 'dark'
    const [selectedVehicleTypeID, setSelectedVehicleTypeID] = useState<number>(1)
    const [selectedMakerID, setSelectedMakerId] = useState<number>()
    const backgroundStyle = {
        backgroundColor: isDarkMode ? 'black' : '#f6f6f6',
    }
    const makerSelectionContext: SelectionContextProps = useMemo(
        () => ({
            selectedId: selectedMakerID,
            setSelectedId: setSelectedMakerId,
        }),
        [selectedMakerID]
    )
    const vehicleTypeSelectionContext: SelectionContextProps = useMemo(
        () => ({
            selectedId: selectedVehicleTypeID,
            setSelectedId: setSelectedVehicleTypeID,
        }),
        [selectedVehicleTypeID]
    )

    return (
        <SafeAreaView style={{ ...backgroundStyle, flex: 1 }}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView contentInsetAdjustmentBehavior='automatic' style={{ padding: 18 }}>
                <SelectionContext.Provider value={vehicleTypeSelectionContext}>
                    <VehicleTypeChooserView />
                </SelectionContext.Provider>
                <SelectionContext.Provider value={makerSelectionContext}>
                    <MakerChooserView />
                </SelectionContext.Provider>
            </ScrollView>
        </SafeAreaView>
    )
}

export default App
