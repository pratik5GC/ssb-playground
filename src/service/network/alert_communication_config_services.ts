import Constants from './core/constants'
import NetworkWorker from './core/network_worker'

export default abstract class AlertCommunicationConfigService {
  static getAlertCommunicationConfig = () => {
    const queryParams = {
      device_id: '62868b03-a457-438b-8525-ad85778e86f1'
    }

    return NetworkWorker.get(
      Constants.ENDPOINTS.AlertCommunicationConfig.get,
      [],
      queryParams,
      Constants.HEADER.headers
    )
  }
}
