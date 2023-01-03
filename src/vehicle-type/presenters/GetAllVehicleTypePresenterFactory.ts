import GetAllVehicleTypePresenter from "./GetAllVehicleTypePresenter"
import GetAllVehicleTypeViewModelPresenter from "./GetAllVehicleTypeViewModelPresenter"

const makeGetAllVehicleTypePresenter = (): GetAllVehicleTypePresenter => (
    new GetAllVehicleTypeViewModelPresenter()
)

export default makeGetAllVehicleTypePresenter
