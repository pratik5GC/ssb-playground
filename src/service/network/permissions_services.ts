import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class PermissionService {
  static getPermissions = () => {
    // const pathParams = ['2d9dcbe0-a548-4c4a-8731-15b1866d4042']
    const pathParams = ['b27d0087-8b93-4de1-a677-cb5be50b87e8']
    const queryParams = { user_id: 'b27d0087-8b93-4de1-a677-cb5be50b87e8' }
    return NetworkWorker.get(
      Constants.ENDPOINTS.Permissions.get,
      pathParams,
      queryParams,
      Constants.HEADER.headers
    )
  }
}
