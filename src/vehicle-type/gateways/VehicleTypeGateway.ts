import VehicleType from "../entities/VehicleType"

interface VehicleTypeGateway {
    all: () => Promise<VehicleType[]>
}

export default VehicleTypeGateway
