import VehicleType from '../entities/VehicleType'
import VehicleTypeViewModel from '../entities/VehicleTypeViewModel'
import GetAllVehicleTypePresenter from './GetAllVehicleTypePresenter'

class GetAllVehicleTypeViewModelPresenter
    implements GetAllVehicleTypePresenter
{
    transform = (vehicleTypes: VehicleType[]): VehicleTypeViewModel[] =>
        vehicleTypes.map((v) => {
            const idsAndIcons: Record<number, string | undefined> = {
                1: '🚘',
                2: '🏍️',
                3: '🚛',
            }
            return { id: v.id, title: v.title, icon: idsAndIcons[v.id] ?? '🐌' }
        })
}

export default GetAllVehicleTypeViewModelPresenter
