import VehicleTypeGateway from "./VehicleTypeGateway";
import VehicleTypeMemoryGateway from "./VehicleTypeMemoryGateway";

const makeVehicleTypeGateway = (): VehicleTypeGateway => {
    return new VehicleTypeMemoryGateway()
}

export default makeVehicleTypeGateway
