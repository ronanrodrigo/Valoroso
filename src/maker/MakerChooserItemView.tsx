import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Icon } from '../../assets/brand-icons/BrandIcons'
import { Maker } from './MakerChooserView'

type MakerChooserItemProps = {
    index: number
    brand: Maker
    selected: boolean
    onSelected: (selectedBrand: Maker) => void
}

const MakerChooserItemView = ({
    index,
    brand,
    selected,
    onSelected,
}: MakerChooserItemProps) => {
    return (
        <Pressable onPress={() => onSelected(brand)} key={brand.id}>
            <View
                style={{
                    ...(selected && { backgroundColor: '#ccc' }),
                    flex: index,
                }}>
                <Icon name={brand.iconName} fill={'#000000'} />
                <Text>{brand.title}</Text>
            </View>
        </Pressable>
    )
}

export default MakerChooserItemView
