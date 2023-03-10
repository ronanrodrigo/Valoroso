import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import HorizontalList from '../design/HorizontalList'
import RoundedSquareListItem from '../design/RoundedSquareListItem'
import Section from '../design/Section'
import makeGetAllVehicleTypePresenter from './presenters/GetAllVehicleTypePresenterFactory'
import { UserSelectionStore } from './SelectionContext'
import makeGetAllVehicleTypesUsecase from './usecases/GetAllVehicleTypesUsecaseFactory'

const VehicleTypeChooserView = () => {
    const [vehicleTypes, isLoading] = useData(
        makeGetAllVehicleTypesUsecase().all,
        makeGetAllVehicleTypePresenter().transform,
        []
    )
    const [selectedVehicleTypeID, setSelectedVehicleId] = UserSelectionStore((state) => [
        state.selectedVehicleId,
        state.setSelectedVehicleId,
    ])
    const loadedView = () => (
        <Section title='Tipo de veículo'>
            <HorizontalList items={vehicleTypes}>
                {(i) =>
                    RoundedSquareListItem({
                        item: i,
                        isSelected: selectedVehicleTypeID === i.id,
                        setSelected: setSelectedVehicleId,
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
