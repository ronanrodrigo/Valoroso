import React from 'react'
import {Text, View} from 'react-native'
import MakerChooserItemView from './MakerChooserItemView'

export type Maker = {
    id: string
    title: string
    iconName: string
}

type MakerChooserProps = {
    brands: Maker[]
    selectedBrand: Maker
    onSelected: (selectedBrand: Maker) => void
}

const MakerChooserView = ({
    brands,
    selectedBrand,
    onSelected,
}: MakerChooserProps) => (
    <View>
        <Text>Brand</Text>
        <View style={{flexDirection: 'row'}}>
            {brands
                .map((b, i) => ({
                    index: i,
                    brand: b,
                    selected: b.id === selectedBrand.id,
                    onSelected: onSelected,
                }))
                .map(MakerChooserItemView)}
        </View>
    </View>
)

export default MakerChooserView
