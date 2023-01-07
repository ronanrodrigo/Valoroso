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
    const [vehicleTypes, isLoading] = useData(makeGetAllVehicleTypesUsecase().all, makeGetAllVehicleTypePresenter().transform, [])

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

const useData = <T, Output>(fetcher: () => Promise<T>, map: (i: T) => Output, initial: Output): [Output, boolean] => {
    const [data, setData] = useState(initial)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        let ignore = false
        const fetchAll = async () => {
            await fetcher()
                .then(map)
                .then((v) => {
                    if (ignore) return
                    setData(v)
                    setIsLoading(false)
                })
        }
        void fetchAll()
        return () => {
            ignore = true
        }
    }, [])
    return [data, isLoading]
}

export default VehicleTypeChooserView
