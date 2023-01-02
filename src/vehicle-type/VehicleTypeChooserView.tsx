import React from 'react'
import HorizontalList, { Identifiable } from '../design/HorizontalList'
import RoundedSquareListItem, {
    RoundedSquareListItemProps,
} from '../design/RoundedSquareListItem'
import Section from '../design/Section'

export type VehicleType = Identifiable & RoundedSquareListItemProps

type VehicleTypeChooserProps = {
    selectedType: VehicleType
    onSelect: (selectedType: VehicleType) => void
}

export const vehicleTypes: VehicleType[] = [
    { id: 'car', title: 'Carro', icon: '🚘'},
    { id: 'motor_bike', title: 'Moto', icon: '🏍️'},
    { id: 'truck', title: 'Caminhão', icon: '🚛'},
]

const VehicleTypeChooserView = ({
    selectedType,
    onSelect,
}: VehicleTypeChooserProps) => (
    <Section title='Tipo de veículo'>
        <HorizontalList items={vehicleTypes}>
            {(i) =>
                RoundedSquareListItem({
                    item: i,
                    onSelect: onSelect,
                    isSelected: selectedType.id === i.id,
                })
            }
        </HorizontalList>
    </Section>
)

export default VehicleTypeChooserView
