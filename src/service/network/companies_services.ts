import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class CompaniesService {
  static getOne = (id: string) => {
    return NetworkWorker.get(Constants.ENDPOINTS.Companies.get, [id], {}, Constants.HEADER.headers)
  }
  static getAll = () => {
    return NetworkWorker.get(Constants.ENDPOINTS.Companies.get, [], {}, Constants.HEADER.headers)
  }
}
