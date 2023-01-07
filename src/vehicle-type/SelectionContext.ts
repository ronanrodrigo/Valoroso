import { createContext } from 'react'

export type SelectionContextProps = {
    selectedId: number | undefined
    setSelectedId: (id: number) => void
}

export const SelectionContext = createContext<SelectionContextProps>({
    selectedId: undefined,
    setSelectedId: (_) => _,
})
