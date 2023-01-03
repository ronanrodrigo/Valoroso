import VehicleType from "../entities/VehicleType"
import VehicleTypeViewModel from "../entities/VehicleTypeViewModel"

interface GetAllVehicleTypePresenter {
    transform: (vehicleTypes: VehicleType[]) => VehicleTypeViewModel[]
}

export default GetAllVehicleTypePresenter
