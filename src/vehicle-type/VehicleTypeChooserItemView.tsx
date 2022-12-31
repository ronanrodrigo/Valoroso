import React from 'react'
import { Button, View } from 'react-native'
import { VehicleType } from './VehicleTypeChooserView'

type VehicleTypeChooserItemProps = {
    type: VehicleType
    selected: boolean
    onSelected: (selectedType: VehicleType) => void
}

const VehicleTypeChooserItemView = ({
    type,
    selected,
    onSelected,
}: VehicleTypeChooserItemProps) => (
    <View
        style={{
            ...(selected && { backgroundColor: "#ccc" }),
            flex: 1,
        }}
        key={type.id}>
        <Button
            title={`${type.icon} ${type.title}`}
            onPress={() => onSelected(type)}
        />
    </View>
)

export default VehicleTypeChooserItemView
