import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import HorizontalList from '../design/HorizontalList'
import RoundedSquareListItem from '../design/RoundedSquareListItem'
import Section from '../design/Section'
import VehicleTypeViewModel from './entities/VehicleTypeViewModel'
import makeGetAllVehicleTypePresenter from './presenters/GetAllVehicleTypePresenterFactory'
import makeGetAllVehicleTypesUsecase from './usecases/GetAllVehicleTypesUsecaseFactory'

type VehicleTypeChooserProps = {
    selectedType?: VehicleTypeViewModel
    onSelect: (selectedType: VehicleTypeViewModel) => void
}

const VehicleTypeChooserView = ({ selectedType, onSelect }: VehicleTypeChooserProps) => {
    const [vehicleTypes, setVehicleTypes] = useState<VehicleTypeViewModel[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchAll = async () => {
            await makeGetAllVehicleTypesUsecase()
                .all()
                .then(makeGetAllVehicleTypePresenter().transform)
                .then((v) => {
                    setVehicleTypes(v)
                    setIsLoading(false)
                    onSelect(v[0])
                })
        }
        void fetchAll()
    }, [])

    const loadedView = () => (
        <Section title='Tipo de veículo'>
            <HorizontalList items={vehicleTypes}>
                {(i) =>
                    RoundedSquareListItem({
                        item: i,
                        onSelect: onSelect,
                        isSelected: selectedType?.id === i.id,
                    })
                }
            </HorizontalList>
        </Section>
    )

    const loadingView = () => <Text>Loading</Text>

    return isLoading ? loadingView() : loadedView()
}

export default VehicleTypeChooserView
