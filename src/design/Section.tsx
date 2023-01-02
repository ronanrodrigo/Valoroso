import React from 'react'
import { Text, View } from 'react-native'

type SectionProps = {
    title: string
    children: JSX.Element | JSX.Element[]
}

const Section = ({ title, children }: SectionProps) => (
    <View style={{
        marginTop: 33
    }}>
        <Text
            style={{
                fontSize: 27,
                fontWeight: 'bold',
                marginBottom: 5
            }}>
            {title}
        </Text>
        {children}
    </View>
)

export default Section
