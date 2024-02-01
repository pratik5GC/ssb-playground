import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class UserPreferenceService {
  static getUserPreference = () => {
    return NetworkWorker.get(
      Constants.ENDPOINTS.UserPreference.get,
      [],
      {},
      Constants.HEADER.headers
    )
  }
}
