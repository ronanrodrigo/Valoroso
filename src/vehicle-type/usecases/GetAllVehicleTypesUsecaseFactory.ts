import makeVehicleTypeGateway from "../gateways/VehicleTypeGatewayFactory";
import GetAllVehicleTypesUsecase from "./GetAllVehicleTypesUsecase";

const makeGetAllVehicleTypesUsecase = (): GetAllVehicleTypesUsecase => {
    return new GetAllVehicleTypesUsecase(makeVehicleTypeGateway())
}

export default makeGetAllVehicleTypesUsecase
