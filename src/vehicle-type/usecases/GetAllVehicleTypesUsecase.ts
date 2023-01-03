import VehicleTypeGateway from "../gateways/VehicleTypeGateway";

class GetAllVehicleTypesUsecase {
    private readonly gateway: VehicleTypeGateway

    constructor(gateway: VehicleTypeGateway) {
        this.gateway = gateway
    }

    all = async () => {
        return await this.gateway.all()
    }
}

export default GetAllVehicleTypesUsecase
