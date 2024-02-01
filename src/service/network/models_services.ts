import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class ModelsService {
  static getModels = () => {
    return NetworkWorker.get(Constants.ENDPOINTS.Models.get, [], {}, Constants.HEADER.headers)
  }
}
