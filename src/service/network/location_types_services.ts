import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class LocationTypesService {
  static getOne = (id: string) => {
    return NetworkWorker.get(
      Constants.ENDPOINTS.LocationTypes.get,
      [id],
      {},
      Constants.HEADER.headers
    )
  }
  static getAll = () => {
    return NetworkWorker.get(
      Constants.ENDPOINTS.LocationTypes.get,
      [],
      {},
      Constants.HEADER.headers
    )
  }
}
