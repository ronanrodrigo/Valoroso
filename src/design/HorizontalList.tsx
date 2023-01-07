import React from 'react'
import { View } from 'react-native'

export interface Identifiable {
    id: number
    isSelected?: boolean
}

type HorizontalListProps<T extends Identifiable> = {
    items: T[]
    children: (item: T) => JSX.Element
}

const HorizontalList = <T extends Identifiable>({ items, children }: HorizontalListProps<T>) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        }}>
        {items.map((i) => {
            const child = children(i)
            child.key = i.id
            return child
        })}
    </View>
)

export default HorizontalList
