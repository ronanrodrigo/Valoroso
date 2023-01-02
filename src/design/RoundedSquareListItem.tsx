import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Identifiable } from './HorizontalList'

export interface RoundedSquareListItemProps {
    title: string
    icon: string | JSX.Element
}

type Props<T extends Identifiable & RoundedSquareListItemProps> = {
    item: T
    isSelected: boolean
    onSelect: (selected: T) => void
}

const RoundedSquareListItem = <
    T extends Identifiable & RoundedSquareListItemProps
>({
    item,
    isSelected,
    onSelect,
}: Props<T>) => {
    return (
        <Pressable
            key={item.id}
            onPress={() => onSelect(item)}
            style={{ marginVertical: 9 }}>
            <View
                style={{
                    backgroundColor: '#fff',
                    flex: 1,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: isSelected ? '#fff' : '#f6f6f6',
                    padding: 24,
                    marginVertical: 12,
                    marginHorizontal: 6,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: isSelected ? 0.09 : 0.06,
                    shadowRadius: 9,
                    elevation: 0,
                    opacity: isSelected ? 1 : 0.6,
                }}>
                <Text style={{ opacity: isSelected ? 1 : 0.6, fontSize: 27 }}>
                    {item.icon}
                </Text>
            </View>
            <Text
                style={{
                    textAlign: 'center',
                    color: '#3a3a3a',
                    opacity: isSelected ? 1 : 0.6,
                    fontSize: 15,
                    fontWeight: isSelected ? '600' : 'normal',
                }}>
                {item.title}
            </Text>
        </Pressable>
    )
}

export default RoundedSquareListItem
