import React from 'react'
import { Icon } from '../../assets/brand-icons/BrandIcons'
import HorizontalList, { Identifiable } from '../design/HorizontalList'
import RoundedSquareListItem, {
    RoundedSquareListItemProps,
} from '../design/RoundedSquareListItem'
import Section from '../design/Section'

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

type MakerChooserProps = {
    selectedMaker: Maker
    onSelect: (selectedMaker: Maker) => void
}

const MakerChooserView = ({ selectedMaker, onSelect }: MakerChooserProps) => (
    <Section title='Marca'>
        <HorizontalList items={makers}>
            {(i) =>
                RoundedSquareListItem({
                    item: i,
                    onSelect: onSelect,
                    isSelected: selectedMaker.id === i.id,
                })
            }
        </HorizontalList>
    </Section>
)

export default MakerChooserView
