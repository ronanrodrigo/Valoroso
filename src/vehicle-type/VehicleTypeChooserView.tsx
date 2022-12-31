import React from 'react'
import { View } from 'react-native'
import VehicleTypeChooserItemView from './VehicleTypeChooserItemView'

export type VehicleType = {
    id: 'car' | 'truck' | 'motor_bike'
    title: string
    icon: string
}

type VehicleTypeChooserProps = {
    types: VehicleType[]
    selectedType: VehicleType
    onSelected: (selectedType: VehicleType) => void
}

const VehicleTypeChooserView = ({
    types,
    selectedType,
    onSelected,
}: VehicleTypeChooserProps) => (
    <View style={{ flexDirection: 'row' }}>
        {types
            .map((v) => ({
                type: v,
                selected: v.id === selectedType.id,
                onSelected: onSelected,
            }))
            .map(VehicleTypeChooserItemView)}
    </View>
)

export default VehicleTypeChooserView
