import React from 'react'
import { Icon } from '../../assets/brand-icons/BrandIcons'
import HorizontalList, { Identifiable } from '../design/HorizontalList'
import RoundedSquareListItem, { RoundedSquareListItemProps } from '../design/RoundedSquareListItem'
import Section from '../design/Section'
import { UserSelectionStore } from '../vehicle-type/SelectionContext'

type Maker = Identifiable & RoundedSquareListItemProps

const makeMaker = (makerName: string): Maker => {
    return {
        id: makerName.toLowerCase(),
        title: makerName,
        icon: Icon({ name: makerName.toLocaleLowerCase(), fill: '#000' }),
    }
}

export const makers = [
    'FIAT',
    'Chevrolet',
    'Volkswagen',
    'Toyota',
    'Hyundai',
    'Renault',
    'Jeep',
    'Honda',
    'Nissan',
    'Peugeot',
    'Citroen',
    'Mitsubishi',
].map(makeMaker)

const MakerChooserView = () => {
    const [selectedMakerId, setSelectedMakerId] = UserSelectionStore((state) => [
        state.selectedMakerId,
        state.setSelectedMakerId,
    ])
    return (
        <Section title='Marca'>
            <HorizontalList items={makers}>
                {(i) =>
                    RoundedSquareListItem({
                        item: i,
                        isSelected: selectedMakerId === i.id,
                        setSelected: setSelectedMakerId,
                    })
                }
            </HorizontalList>
        </Section>
    )
}

export default MakerChooserView
