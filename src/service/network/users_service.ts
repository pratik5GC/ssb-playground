import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class UsersService {
  static getAllUsers = () => {
    return NetworkWorker.get(Constants.ENDPOINTS.Users.get, [], {}, Constants.HEADER.headers)
  }
  static getUserFromCognito = () => {
    const queryParams = { cognito_id: 'b592d093-1d71-4e06-a8d2-f24816ddf6f0' }

    return NetworkWorker.get(
      Constants.ENDPOINTS.Users.getUserFromCognito,
      [],
      queryParams,
      Constants.HEADER.headers
    )
  }
}
