import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class {
  static getAddresses = () => {
    return NetworkWorker.get(Constants.ENDPOINTS.Addresses.get, [], {}, Constants.HEADER.headers)
  }
}
