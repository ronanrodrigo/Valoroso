import create from 'zustand'

export type UserSelectionStoreProps = {
    selectedVehicleId: number | undefined
    setSelectedVehicleId: (id: number) => void
    selectedMakerId: number | undefined
    setSelectedMakerId: (id: number) => void
}

export const UserSelectionStore = create<UserSelectionStoreProps>((set) => ({
    selectedVehicleId: 1,
    setSelectedVehicleId: (id) => set((state) => ({ selectedVehicleId: id })),
    selectedMakerId: undefined,
    setSelectedMakerId: (id) => set((state) => ({ selectedMakerId: id })),
}))
