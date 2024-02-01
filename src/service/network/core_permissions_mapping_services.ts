import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class CorePermissionMappingService {
  static getCorePermissionMappingService = () => {
    return NetworkWorker.get(
      Constants.ENDPOINTS.CorePermissionMapping.get,
      [],
      {},
      Constants.HEADER.headers
    )
  }
}
