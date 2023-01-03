import VehicleType from '../entities/VehicleType'
import VehicleTypeGateway from './VehicleTypeGateway'

class VehicleTypeMemoryGateway implements VehicleTypeGateway {
    private readonly vehicleTypes: VehicleType[] = [
        { id: 1, title: 'Carro' },
        { id: 2, title: 'Moto' },
        { id: 3, title: 'Caminhão' },
    ]

    all = async () => await Promise.resolve(this.vehicleTypes)
}

export default VehicleTypeMemoryGateway
